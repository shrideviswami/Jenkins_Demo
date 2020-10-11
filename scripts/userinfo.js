console.log("userinfo loaded");
var userdetails=[
	{id:"1",username:"Shridevi Swami",password:"shridevi123",email:"shrideviswami@gmail.com",phoneno:"9763322195",imagepath:"./images/1.jpg"},
	{id:"2",username:"Shashishri Jadhav",password:"123456789",email:"jadhav_meethu@yahoo.co.in",phoneno:"7343234565",imagepath:"./images/2.jpg"},
  {id:"3",username:"Neelneela",password:"abc@123",email:"mygirl@hotmail.com",phoneno:"8765987098",imagepath:"./images/3.jpg"},
  {id:"4",username:"Milind Mahajan",password:"milind#123",email:"milind_mahajan@cdac.in",phoneno:"8451006598",imagepath:"./images/4.jpg"},
  {id:"5",username:"Sudarshan Patil",password:"patil@#su",email:"hanya@gmail.com",phoneno:"9098768120",imagepath:"./images/5.jpg"}
];

/*
<table class="table" class="text-center">
            <thead class="thead-light">
              <tr>
                <th>#</th> <th>User Name</th> <th>Password</th> <th>Email ID</th> <th>Phone No</th>  <th>Photo</th>
              </tr>              
            </thead>
            <tbody> <tr> <th scope="row">1</th> <td>Mark</td> <td>Otto</td> <td>Otto</td> <td>123</td>                
                <td><img src="./images/1.jpg"></img></td>
              </tr> </tbody>
          </table>
*/

function showUserDetails(){

          var tableuser=document.createElement("table");
          tableuser.className="table";
          var v_thead=document.createElement("thead");
          v_thead.className="thead-light";
          var v_tr=document.createElement("tr");
          var v_th1=document.createElement("th");
          var v_th1text=document.createTextNode("#");
          var v_th2=document.createElement("th");
          var v_th2text=document.createTextNode("User Name");
          var v_th3=document.createElement("th");
          var v_th3text=document.createTextNode("Password");
          var v_th4=document.createElement("th");
          var v_th4text=document.createTextNode("Email ID");
          var v_th5=document.createElement("th");
          var v_th5text=document.createTextNode("Phone No");
          var v_th6=document.createElement("th");
          var v_th6text=document.createTextNode("Photo");

          var outer=document.getElementById("userdetails");
          outer.appendChild(tableuser);
          tableuser.appendChild(v_thead);
          v_thead.appendChild(v_tr);
          v_tr.appendChild(v_th1);
          v_th1.appendChild(v_th1text);
          v_tr.appendChild(v_th2);
          v_th2.appendChild(v_th2text);
          v_tr.appendChild(v_th3);
          v_th3.appendChild(v_th3text);
          v_tr.appendChild(v_th4);
          v_th4.appendChild(v_th4text);
          v_tr.appendChild(v_th5);
          v_th5.appendChild(v_th5text);
          v_tr.appendChild(v_th6);
          v_th6.appendChild(v_th6text);

          for(i=0;i<userdetails.length;i++){
                  var v_tbody=document.createElement("tbody");
                  var v_tr=document.createElement("tr");
                  var v_th=document.createElement("th");
                  v_th.scope="row";
                  var v_thtext=document.createTextNode(userdetails[i].id);
                  var v_td1=document.createElement("td");
                  var v_td1text=document.createTextNode(userdetails[i].username);
                  var v_td2=document.createElement("td");
                  var v_td2text=document.createTextNode(userdetails[i].password);
                  var v_td3=document.createElement("td");
                  var v_td3text=document.createTextNode(userdetails[i].email);
                  var v_td4=document.createElement("td");
                  var v_td4text=document.createTextNode(userdetails[i].phoneno);
                  var v_td5=document.createElement("td");
                  tableuser.appendChild(v_tbody);
                  v_tbody.appendChild(v_tr);
                  v_tbody.appendChild(v_th);
                  v_th.appendChild(v_thtext);
                  v_tbody.appendChild(v_td1);
                  v_tbody.appendChild(v_td2);
                  v_tbody.appendChild(v_td3);
                  v_tbody.appendChild(v_td4);
                  v_tbody.appendChild(v_td5);
                  v_td1.appendChild(v_td1text);
                  v_td2.appendChild(v_td2text);
                  v_td3.appendChild(v_td3text);
                  v_td4.appendChild(v_td4text);
                  var uimg=document.createElement("img");
                      uimg.src=userdetails[i].imagepath;    
                      v_td5.appendChild(uimg);
          }

};
