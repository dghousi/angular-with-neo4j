import neo4j, { Driver } from 'neo4j-driver';


export class Neo4jService {
    private driver: Driver;
  
    constructor() {
      this.driver = neo4j.driver(
        'bolt://localhost:7687',
        neo4j.auth.basic('neo4j', 'root')
      );
    }
  
    getDriver() {
      return this.driver;
    }
  }
  