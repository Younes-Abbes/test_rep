'use server';

import { addCourse, uploadPic } from "../Data/addData";

export async function handleAddCourse(formData: FormData) {
    const {
      id,
      image,
      label,
      description,
      price,
      rating,
      students,
      colors,
    } = {
      id: Number(formData.get("id")),
      image: formData.get("image") as File,
      label: String(formData.get("label")),
      description: String(formData.get("description")),
      price: Number(formData.get("price")),
      rating: Number(formData.get("rating")),
      students: Number(formData.get("students")),
      colors: String(formData.get("colors")),
    };
  
      const newCourse = {
        id,
      image: image.name,
      label,
      description,
      price,
      rating,
      students,
      colors,
    }
  
  
    const {error: addingError} = await addCourse(newCourse, image);
    if (addingError) {
      throw new Error(addingError.message);
    }  
  }
  
  export async function handleAddFile (formData: FormData) {
    const file = formData.get('file') as File;
    if (file.size === 0) {
      throw new Error('No file selected');}
    const success = await uploadPic('images', file, file.name);
    
    return success;
  }

  export async function handleBasicInformation (formData: FormData) {
    
    return;
  }