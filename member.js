function skillsMember() {
  return {
    name: 'John Doe',
    skills: ['JavaScript', 'React', 'Node'],
    greet: function () {
      console.log(`Hello, my name is ${this.name} and I know ${this.skills.join(', ')}`);
    }
  };
}