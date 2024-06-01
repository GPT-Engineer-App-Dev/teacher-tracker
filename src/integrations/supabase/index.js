/* supabase integration types

Reactions // table: reactions
    id: number
    post_id: number // foreign key to Posts
    user_id: string
    emoji: string

Documents // table: documents
    id: number
    student_id: number // foreign key to Students
    title: string
    content: string
    created_at: string

Posts // table: posts
    id: number
    name: string
    body: string
    created_at: string
    author_id: string
    likes_count: number

Classes // table: classes
    id: number
    name: string
    description: string
    created_at: string

Students // table: students
    id: number
    first_name: string
    last_name: string
    email: string
    created_at: string

ClassStudents // table: class_students
    class_id: number // foreign key to Classes
    student_id: number // foreign key to Students

*/

export const useReactions = ()=> useQuery({
    queryKey: ['reactions'],
    queryFn: () => fromSupabase(supabase.from('reactions').select('*')),
})
export const useAddReaction = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newReaction)=> fromSupabase(supabase.from('reactions').insert([newReaction])),
        onSuccess: ()=> {
            queryClient.invalidateQueries('reactions');
        },
    });
};

export const useDocuments = ()=> useQuery({
    queryKey: ['documents'],
    queryFn: () => fromSupabase(supabase.from('documents').select('*')),
})
export const useAddDocument = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newDocument)=> fromSupabase(supabase.from('documents').insert([newDocument])),
        onSuccess: ()=> {
            queryClient.invalidateQueries('documents');
        },
    });
};

export const usePosts = ()=> useQuery({
    queryKey: ['posts'],
    queryFn: () => fromSupabase(supabase.from('posts').select('*')),
})
export const useAddPost = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newPost)=> fromSupabase(supabase.from('posts').insert([newPost])),
        onSuccess: ()=> {
            queryClient.invalidateQueries('posts');
        },
    });
};

export const useClasses = ()=> useQuery({
    queryKey: ['classes'],
    queryFn: () => fromSupabase(supabase.from('classes').select('*')),
})
export const useAddClass = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newClass)=> fromSupabase(supabase.from('classes').insert([newClass])),
        onSuccess: ()=> {
            queryClient.invalidateQueries('classes');
        },
    });
};

export const useStudents = ()=> useQuery({
    queryKey: ['students'],
    queryFn: () => fromSupabase(supabase.from('students').select('*')),
})
export const useAddStudent = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newStudent)=> fromSupabase(supabase.from('students').insert([newStudent])),
        onSuccess: ()=> {
            queryClient.invalidateQueries('students');
        },
    });
};

export const useClassStudents = ()=> useQuery({
    queryKey: ['class_students'],
    queryFn: () => fromSupabase(supabase.from('class_students').select('*')),
})
export const useAddClassStudent = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newClassStudent)=> fromSupabase(supabase.from('class_students').insert([newClassStudent])),
        onSuccess: ()=> {
            queryClient.invalidateQueries('class_students');
        },
    });
};