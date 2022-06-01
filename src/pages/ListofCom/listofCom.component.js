import React, { useEffect, useState } from "react";
import { set,ref, onValue, DataSnapshot } from "firebase/database";
import { firebaseDatabase } from "../../backend/firebasehandler";


const ListofCom = () => {

        const [comList,  setComList] = useState([]);
   
        useEffect(() => {  
            const fetchData = async () => {
                const Ref = ref(firebaseDatabase  , 'COMPANY_RECORDS' );
                onValue(Ref, (DataSnapshot) => {
                    if (DataSnapshot.exists()) {
                        const tempVal = DataSnapshot.val();
                        console.log(Object.values(tempVal))
   
                        const temp = [];
                        for (const name in DataSnapshot.val()) {
                            const comList = DataSnapshot.child(name).val();
                            temp.push(comList);
                        }
                        setComList(temp);
                    }else{
                        alert("No records found!")
                    }
                })
            }
            fetchData()
        }, []);
   
        return (
            <div>
                <h1> List of companies</h1>
                <div>
                    {
                        comList.map((item) => {
                            return (
                                <div className="grid-content">
                                    <h3>{item.name}</h3>
                        
                                    </div>
                            )
                        })
                    }
                </div>
            </div>
        )
   }


export default ListofCom;
