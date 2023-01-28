class ClassWithPrivateAccessor {
    #message;
     constructor(decoratatedMessage) {
      this.#decoratedMessage = decoratatedMessage;
      console.log(this.#decoratedMessage);
    }
  
    get #decoratedMessage() {
      return this.#message;
    }
    set #decoratedMessage(message) {
      this.#message = message;
    }
  }
  
  new ClassWithPrivateAccessor("manage");