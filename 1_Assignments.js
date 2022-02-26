class StackDS{
    constructor(){
        this.elements = [];
        this.count = 0;
        this.maxlimit = 4;
    }

    // Adding input values to the top of the stack
    stackPush(input){
        if(this.count <= this.maxlimit){
        this.elements[this.count] = input;
        console.log(`${input} pushed to the stack at position ${this.count}`);
        this.count = this.count + 1;
        return this.count - 1; 
        } else
        {
            console.log(`You have reached the maximum limit ${this.maxlimit}`)
        }   
    }

    stackPop()
    {
        // Remove the top most element and return that value
        let deleteElement = this.elements[this.count - 1];
        this.count = this.count - 1;
        console.log(`${deleteElement} is removed from the stack`);
        return deleteElement;
    }

    stackPeek()
    {
        // checks and returns the top element of the stack
        console.log(`${this.elements[this.count -1]} is the element on the top of the stack`);
        return this.elements[ this.count - 1];
    }

    stackSize()
    {
        //returns the size of the stack
        console.log(`The size of the stack is ${this.count}`);
        return this.count; 
    }
}

let stack = new StackDS(); 
stack.stackPush(10);
stack.stackPush(20);
stack.stackPush(30);
stack.stackPeek();
stack.stackPush(40);
stack.stackPush(50);
stack.stackPush(60);
stack.stackPop();
stack.stackSize();