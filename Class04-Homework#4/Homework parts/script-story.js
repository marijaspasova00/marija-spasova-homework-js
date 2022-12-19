function tellStory(name, mood, activity){
    if(typeof name !== 'string' && typeof mood !== 'string' && typeof activity !== 'string'){
        return "Invalid input!";
    } else{
        console.log(`This is ${name}. ${name} is a nice person.Today they are ${mood}. They are ${activity} all day. The end.`);
    }
}
tellStory("marija", "happy", "playing");