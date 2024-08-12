'use server';

import { createClient } from "@/utils/supabase/server";

export async function deleteData(table: string) {
    const supabase = createClient();
    const { data, error } = await supabase.from(table).delete();

    if (error) {
        throw new Error("An error occurred while deleting data: " + error.message);
    }

    console.log("Data deleted successfully:", data);
} 

export async function deleteDataById(table: string, id: number) {
    const supabase = createClient();
    const { data, error } = await supabase.from(table).delete().match({ id }).single();

    if (error) {
        throw new Error("An error occurred while deleting data: " + error.message);
    }

    console.log("Data deleted successfully:", data);
}

export async function deleteCourses() {
    deleteData('courses');
}