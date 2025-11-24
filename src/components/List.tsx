//import React from 'react'
import Card from "./Card";


export type CodingResource = {
    id: number;
    description: string;
    url: string;
    types: string[];
    topics: string[];
    levels: string[];
    paid: boolean;
  };
  

const List = ({resources}) => {
    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource) => (
          <Card key={resource.id} resource={resource} />
        ))}
      </div>
    )
  }
  
  export default List;