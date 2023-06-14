import { Injectable } from '@angular/core';
import neo4j from 'neo4j-driver';

import { Neo4jService } from './neo4j.service';
import { Node } from './node.model';

@Injectable({
  providedIn: 'root',
})
export class NodeService {
  constructor(private neo4jService: Neo4jService) {}

  async getAllNodes(): Promise<Node[]> {
    const session = this.neo4jService.getDriver().session();
    const result = await session.run('MATCH (n:Node) RETURN n');
    session.close();
    return result.records.map((record) => {
      const node = record.get('n').properties;
      return { id: record.get('n').identity.toString(), ...node };
    });
  }

  async createNode(node: Node): Promise<Node> {
    const session = this.neo4jService.getDriver().session();
    const result = await session.run(
      'CREATE (n:Node { name: $name, description: $description }) RETURN n',
      { name: node.name, description: node.description }
    );
    session.close();
    const createdNode = result.records[0].get('n').properties;
    return { id: result.records[0].get('n').identity.toString(), ...createdNode };
  }

  async updateNode(node: Node): Promise<Node> {
    const session = this.neo4jService.getDriver().session();
    const result = await session.run(
      'MATCH (n:Node) WHERE id(n) = toInteger($id) SET n = $node RETURN n',
      { id: node.id, node }
    );
    session.close();
    const updatedNode = result.records[0].get('n').properties;
    return { id: result.records[0].get('n').identity.toString(), ...updatedNode };
  }

  async deleteNode(nodeId: string): Promise<void> {
    const session = this.neo4jService.getDriver().session();
    await session.run('MATCH (n:Node) WHERE id(n) = toInteger($id) DELETE n', { id: nodeId });
    session.close();
  }
}
