/**
 * Created by Chao-xps on 2017/10/13.
 */

function setup() {
    noCanvas();

    let bot = new RiveScript();
    console.log("Creating new bot...");

    // Load an individual file.
    bot.loadFile("brain.rive", brainReady, brainError);

    function brainReady() {
        console.log('Chatbot ready!');
        bot.sortReplies();

        let num = floor(random(0,99999));
        console.log(num);
        console.log("Please don't cheat by peaking at the console");
        bot.reply('local_user','set '+num);

    }

    function brainError() {
        console.log('Chatbot Error!');
    }

    let button = select('#submit');
    let user_input = select('#user_input');
    let output = select('#output');

    button.mousePressed(chat);

    function chat(){
        let input =  user_input.value();
        /* tutorial at https://www.rivescript.com/docs/tutorial */
        let reply = bot.reply("local_user", input);

        output.html(reply);
    }



}
