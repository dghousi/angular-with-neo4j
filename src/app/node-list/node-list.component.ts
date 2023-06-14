
import { Component, OnInit } from '@angular/core';
import { Node } from '../node.model';
import { NodeService } from '../node.service';

@Component({
  selector: 'app-node-list',
  templateUrl: './node-list.component.html',
  styleUrls: ['./node-list.component.css'],
})
export class NodeListComponent implements OnInit {
  nodes: Node[] = [];

  constructor(private nodeService: NodeService) {}

  ngOnInit() {
    this.fetchNodes();
  }

  fetchNodes() {
    this.nodeService.getAllNodes().then((nodes) => {
      this.nodes = nodes;
    });
  }

  deleteNode(nodeId: string) {
    this.nodeService.deleteNode(nodeId).then(() => {
      this.fetchNodes();
    });
  }
}
