export const load = async ({ fetch, params }) => {
    const fetchSingleTeacher = async (teacherId) => {
        const response = await fetch(`http://localhost:3000/users/single/${teacherId}`)
        const teacher = await response.json()
        return teacher
    }

    return {
        teacher: await fetchSingleTeacher(params.teacherId)
    }
}