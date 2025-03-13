import { Message } from './../message';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-text-board',
  imports: [RouterOutlet, FormsModule, DatePipe],
  templateUrl: './text-board.component.html',
  styleUrl: './text-board.component.css'
})
export class TextBoardComponent {
  name = "";
  desc = "";
  messages: Message[] = [];
  addMessage(): void {
    // 防呆，避免名稱或內容是空值時也可以留言
    if (!this.name.trim() ||!this.desc.trim()) {
      return;
    }

    // 用名稱跟內容產生一個留言的資料物件
    const msgList = new Message(this.name, this.desc);

    // 將留言的資料物件放進容器裡
    this.messages.push(msgList);

    // 清空內容
    this.desc = '';
  }
  deleteMessage(index: number): void {
    // 刪除指定索引的留言
    this.messages.splice(index, 1);
  }
}
