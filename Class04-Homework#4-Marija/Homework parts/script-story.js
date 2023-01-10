function tellStory(array){
    for (let el of array){
        if(typeof el !== 'string'){
            return "Invalid input!";
        }
    }
    return `This is ${array[0]}. ${array[0]} is a nice person.Today they are ${array[1]}. They are ${array[2]} all day. The end.`;
}
tellStory("marija", "happy", "playing");