import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Node } from '../node.model';
import { NodeService } from '../node.service';

@Component({
  selector: 'app-node-form',
  templateUrl: './node-form.component.html',
  styleUrls: ['./node-form.component.css'],
})
export class NodeFormComponent {
  constructor(private nodeService: NodeService) {}

  createNode(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const newNode: Node = {
      name: form.value.name,
      description: form.value.description,
    };

    this.nodeService.createNode(newNode).then(() => {
      form.resetForm();
    });
  }
}
