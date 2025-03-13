export class Message {
  constructor(name: string, desc: string) {
    this.name = name;
    this.desc = desc;
  }
  name: string;
  desc: string;
  date: Date = new Date();
}
