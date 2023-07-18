export interface logIn{
    id:any,
    email:string,
    password:string
}

export interface signUp{
    id:any,
    fname:string,
    lname:string,
    phone:string,
    email:string,
    password:string
    cnfpassword:string
}



export interface category{
    id:any,
    title:undefined|string,
    description:undefined|string,
}

export interface quiz{
    id:any,
    title:undefined|string,
    description:undefined|string,
    number_of_questions:undefined|string,
    max_marks:undefined|string,
    active:boolean,
    category_id:any
}

export interface questions{
    id:any,
    content:undefined|string,
    image:undefined|string,
    answer:undefined|string,
    option1:undefined|string,
    option2:undefined|string,
    option3:undefined|string,
    option4:undefined|string,
    quiz_id:any
}