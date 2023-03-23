export const load = async ({ fetch }) => {
    const fetchTeachers = async () => {
        const response = await fetch(`${proccess.env.APP_URI}/users/teacher`)
        const teachers = await response.json()
        return teachers
    }

    return {
        teachers: await fetchTeachers()
    }
}