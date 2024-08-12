"use server";

import { supabase } from "@/utils/supabase/server";

export async function getData({table, columns} : {table: string, columns: string[]}) {
  const { data, error } = await supabase.from(table).select(columns.join(', '));



  return data;
}

export async function getCourses() {
  

  let { data: courses, error } = await supabase
  .from('courses')
  .select('*')
          
if (error) throw new Error(error.message);
return courses;

}

export async function getCourseById(id: Number | null) {

  if (!id) return null;
  
let { data: courses, error } = await supabase
.from('courses')
.select('*')
.eq('id', id)

if(!courses) return null;

const course  = courses.at(0);
if (error) throw new Error(error.message);

const {data: {publicUrl: imageUrl}} = await supabase.storage.from("courses").getPublicUrl(`public/${courses ? course?.image: 'images.jpg'}`);


if (!course?.image.includes('supabase')) {
return [{...course, image: imageUrl}];}

return courses;

}
