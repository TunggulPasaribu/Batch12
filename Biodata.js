function getProfile(){
    return {
    name : 'Tunggul Julianto Pasaribu',
    age : 22,
    address : 'Jl.Mesjid Gg Teratai 30 No 7. Medan',
    hobbies : ['Berenang', 'Sepak Bola'],
    is_married : false,
    list_school: { 
        name : 'Institut Teknologi Del',
        year_in: 2015,
        year_out: 2019,
        major : 'Electrical Enggineering',
    },
    skills : [{
        skill_name : 'Microcontroller Programming',
        level : 'Advanced',
    },
    {
        skill_name : 'C Programming Language ',
        level : 'Advanced',
    }],
    interest_in_coding: true,
}
}

let profile = getProfile();

let skills = profile.skills;

let name = profile.list_school.name;


console.log(JSON.stringify(profile)); 
// Source code berasal dari https://api.bukalapak.com/v2/products/f3vi.json dan juga https://www.youtube.com/watch?v=EluVFXu4GOU&t=187s



