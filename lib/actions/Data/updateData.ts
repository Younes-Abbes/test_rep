'use server';

import { Tables, TablesUpdate } from "@/types/supabase";
import { createClient, supabase } from "@/utils/supabase/server";
import { getProfile } from "../credentials/getCredentials";

export async function updateDataById(table: string, id: number, data: any) {
    const supabase = createClient();
    const { data: updatedData, error } = await supabase.from(table).update(data).match({ id }).single();

    if (error) {
        throw new Error("An error occurred while updating data: " + error.message);
    }

    console.log("Data updated successfully:", updatedData);
}

export async function handleUpdateCourse(formData: FormData) {
    const {
      id,
      created_at,
      image,
      label,
      description,
      price,
      rating,
      students,
      colors,
    } = {
      id: Number(formData.get("id")),
      created_at: String(formData.get("created_at")),
      image: formData.get("image") as File,
      label: String(formData.get("label")),
      description: String(formData.get("description")),
      price: Number(formData.get("price")),
      rating: Number(formData.get("rating")),
      students: Number(formData.get("students")),
      colors: String(formData.get("colors")),
    };
  
    const {data : {publicUrl : exists}} = await supabase.storage.from("courses").getPublicUrl(`public/${image.name}`);
  
    if(!exists) {  
      const {error: error1} = await supabase.storage.from("courses").upload(`public/${image.name}`, image);
      if (error1) {
        throw new Error('image already in storage !');
      }
    }
    
  
    const course: TablesUpdate<'courses'> = {
      id,
      created_at,
      image: image.name,
      description,
      price,
      rating,
      students,
      colors,
      label,
    }
  
    
    const { data, error } = await supabase
    .from('courses')
    .update({
      label : course.label,
      description : course.description,
      price : course.price,
      rating : course.rating,
      students : course.students,
      colors : course.colors,
    })
    .eq('id', course.id).select();
  
  
  
  if (error) throw new Error('could not update course');
  }

  export async function handleAccountUpdate (formData: FormData)
  {
    console.log(formData)
    const obj = await getProfile();
    const id = obj?.id;
    const newAccount : Tables<'profiles'> = {
      id: id ?? '',
      avatar: <string | null>(formData.get('avatar')),
      first_name: <string | null>(formData.get('firstName')),
      last_name: <string | null>(formData.get('lastName')),
      username: <string | null>(formData.get('username')),
      email: <string | null>(formData.get('email')),
      phone_number: <number | null>(Number(formData.get('phoneNumber'))),
      tittle: <string | null>(formData.get('title')),
      created_at: '',
    }
    console.log(newAccount);

    /* const { data, error } = await supabase.from('profiles').update({newAccount}).eq('id', id).select();
    if (error) throw new Error('could not update account'); */
    return;
  }