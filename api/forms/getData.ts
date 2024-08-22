'use server';

import { getFile } from "../Data/getData";

export async function handleGetFile (formData: FormData) {
    const bucket = String(formData.get('bucket'));
    const picture = String(formData.get('picture'));
  
    const result = await getFile(bucket, picture);
  
    return result;
  
  }