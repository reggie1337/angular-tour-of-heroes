import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { MatExpansionModule } from '@angular/material';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  standalone: true,
  imports: [MatExpansionModule, CommonModule],
})
export class MessagesComponent implements OnInit {
  constructor(public messageService: MessageService) {}
  panelOpenState = false;
  ngOnInit(): void {}
}
