export const load = async ({ fetch }) => {
    const fetchTeachers = async () => {
        const response = await fetch('http://localhost:3000/users/teacher')
        const teachers = await response.json()
        return teachers
    }

    return {
        teachers: await fetchTeachers()
    }
}