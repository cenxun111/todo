import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { LOADU } from "../GraphQL/Queries";
// import Card from '../center/Card'
import { DELETEU } from "../GraphQL/Mutations";

// const GetCards = () => {
//     const {error,loading,data} = useQuery(LOADU);
//     const [users,setUsers] = useState([]);
//     useEffect(() => {
//         if (data) {
//             setUsers(data.getAllCard)
//         }
//     },[data]);

//     return (
//         <div>
//             {users.map((card) => {
//                 return <Card
//                 // key={card.name}
//                 name={card.name}
//                 genre={card.genre}
//                 year={card.year}
//                 />
//             },
//             )}
//         </div>
//     )
// }

const GetCards = () => {
  const { data } = useQuery(LOADU);
  console.log(data)
  const [deleteCard, { error }] = useMutation(DELETEU);
  return (
    <div>
      {data &&
        data.getAllCard.map((card) => {
          return (
            <div>
              {card.name} / {card.genre}/{card.year}
              <button className="bg-blue-400 roudned-md"
                onClick={() => {
                  deleteCard({ variables:{id:card.id},
                    refetchQueries:[{query:LOADU}]});
                  
                }}
              >
                Delete Card
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default GetCards;
