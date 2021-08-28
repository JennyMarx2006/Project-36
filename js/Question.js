class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
    this.input2 = createInput("Enter the correct option");


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.Onequestion=createElement('h3');
    this.option1=createElement('h4');
    this.option2=createElement('h4');
    this.option3=createElement('h4');
    this.option4=createElement('h4');




    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
   
    this.message.hide();
    //Add hide() for questions, options & input box
    this.Onequestion.hide();
    this.input2.hide();
    this.option1.hide();
    this.option2.hide();
    this.option3.hide();
    this.option4.hide();





  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.Onequestion.html("Whats starts and ends with the letter 'E',but has only one letter? ");
    this.Onequestion.position(230,90);
    
    this.option4.html("1:Everyone");
    this.option4.position(230,110);

    this.option3.html("2:Envelope");
    this.option3.position(230,130);

    this.option2.html("3:Estimate");
    this.option2.position(230,150);


    this.option1.html("4:Example");
    this.option1.position(230,170);





    this.input1.position(560, 230);
    this.input2.position(210,230);
    this.button.position(290, 300);

    this.handleMousePressed();
  }

    // Add a mousepressed action when the button is clicked Display the this.message
    handleMousePressed(){
      this.button.mousePressed(()=>{
        this.button.hide();
        this.input1.hide();
        this.input2.hide();
        this.Onequestion.hide();
        this.option1.hide();
        this.option2.hide();
        this.option3.hide();
        this.option4.hide();
        
        this.message.html('THANK YOU,YOUR ANSWER HAS BEEN SUBMITTED')
        this.message.position(200,130);
      }
  
      )
    }
  
  }