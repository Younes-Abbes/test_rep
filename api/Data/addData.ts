'use server';

import { Tables } from "@/types/supabase";
import { createClient, supabase } from "@/utils/supabase/server";

export async function addData(table: string, data: any) {
    const supabase = createClient();
    const { data: newData, error } = await supabase.from(table).insert(data);

    if (error) {
        throw new Error("An error occurred while adding data: " + error.message);
    }

    console.log("Data added successfully:", newData);
}

export async function loadCourses(tab: Tables<'courses'>[]) {
    const { data, error } = await supabase
      .from('courses')
      .insert(
        tab.map((course) => (course))
      )
      .select();
  
    if (error) throw new Error('Data already existing');
  
    return data;
  }

  export async function addCourse(course : any, image: File) {
    const {error: error1} = await supabase.storage.from("courses").upload(`public/${course.image}`, image);
  
    if (error1) {
      return {error : new Error('image already in storage !')};
    }
  
    const { error:error2 } = await supabase.from("courses").insert([{...course, created_at: null}]);
  
    if (error2) {
      return {error : new Error('could not add course to supabase')};
    }
    return {error : null};
  }

  
  export async function uploadPic (bucket: string, picture: File, name: string) {
    const { error } = await supabase.storage.from(bucket).upload(`/${name}`, picture);
    const {data: {publicUrl}} = await supabase.storage.from(bucket).getPublicUrl(`/${name}`);
    if (error) console.log(error.message);
    return publicUrl;
  }


  