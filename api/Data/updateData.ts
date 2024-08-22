'use server';

import { TablesUpdate } from "@/types/supabase";
import { createClient, supabase } from "@/utils/supabase/server";

export async function updateDataById(table: string, id: number, data: any) {
    const supabase = createClient();
    const { data: updatedData, error } = await supabase.from(table).update(data).match({ id }).single();

    if (error) {
        throw new Error("An error occurred while updating data: " + error.message);
    }

    console.log("Data updated successfully:", updatedData);
}



  export async function updateProfile (id: string,newProfile: TablesUpdate<'profiles'>) {
    
const { data, error } = await supabase
.from('profiles')
.update(newProfile)
.eq('id', id)
.select()

    if (error) throw new Error(error.message);
    return data;
  }
  
