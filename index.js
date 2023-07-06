const express = require("express");
const bodyParser = require("body-parser");
const server = express();
const mysql = require("mysql");

server.use(bodyParser.json());

var cors = require("cors");
server.use(cors());


// ========================== CREATE CONNECTION =============================
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "budget",
  port: 3306,
});

// ============================================== DB CONNECTION =========================
db.connect((err) => {
  if (err) {
    return err;
  }
  // else{
  //     console.log("db connection success")
  // }
});

// get all user data
server.get("/user", (req, res) => {
  // console.log("get user successfully....");
  let qr = "select * from user";
  // console.log("get ll ")
  console.log(qr);
  db.query(qr, (err, result) => {
    console.log(result);
    if (err) {
      console.log("Error : ", err);
      return err;
    }
    if (result.length > 0) {
      res.send({
        message: "get all user details",
        data: result,
      });
    }
  });
});
// get all expense
server.get("/expense", (req, res) => {
  // console.log("get expense successfully....");
  let qr = "select * from expense";
  // console.log("get ll ")
  console.log(qr);
  db.query(qr, (err, result) => {
    console.log(result);
    if (err) {
      console.log("Error : ", err);
      return err;
    }
    if (result.length > 0) {
      res.send({
        message: "get all expense details",
        data: result,
      });
    }
  });
});
// get all investment
server.get("/investment", (req, res) => {
  // console.log("get expense successfully....");
  let qr = "select * from investment";
  // console.log("get ll ")
  console.log(qr);
  db.query(qr, (err, result) => {
    console.log(result);
    if (err) {
      console.log("Error : ", err);
      return err;
    }
    if (result.length > 0) {
      res.send({
        message: "get all investment data",
        data: result,
      });
    }
  });
});
// get all investment_category
server.get("/investmentCategory", (req, res) => {
  // console.log("get expense successfully....");
  let qr = "select * from investment_category";
  // console.log("get ll ")
  console.log(qr);
  db.query(qr, (err, result) => {
    console.log(result);
    if (err) {
      console.log("Error : ", err);
      return err;
    }
    if (result.length > 0) {
      res.send({
        message: "get all investment category data",
        data: result,
      });
    }
  });
});
// get all passive
server.get("/passive", (req, res) => {
  // console.log("get expense successfully....");
  let qr = "select * from passive";
  // console.log("get ll ")
  console.log(qr);
  db.query(qr, (err, result) => {
    console.log(result);
    if (err) {
      console.log("Error : ", err);
      return err;
    }
    if (result.length > 0) {
      res.send({
        message: "get all passive income data",
        data: result,
      });
    }
  });
});

// get all salary
server.get("/salary", (req, res) => {
  // console.log("get expense successfully....");
  let qr = "select * from salary";
  // console.log("get ll ")
  console.log(qr);
  db.query(qr, (err, result) => {
    console.log(result);
    if (err) {
      console.log("Error : ", err);
      return err;
    }
    if (result.length > 0) {
      res.send({
        message: "get all salary data",
        data: result,
      });
    }
  });
});

// ==================================== GET SINGLE DATA ===============================
//get single expense data ===> GET
server.get("/expense/:id", (req, res) => {
  console.log(req.params.id);
  primaryId = req.params.id;
  userId = req.params.uid;
  let qr = `select * from expense where eid=${primaryId}`;
  db.query(qr, (err, result) => {
    if (err) {
      console.log(err, "error");
    }
    if (result.length > 0) {
      res.send({
        message: "get single expense successfully",
        data: result,
      });
      console.log(result);
    } else {
      res.send({
        message: "data not found",
      });
    }
  });
});

//get single expense data and single user id ===> GET
server.get("/expense/:id/:uid", (req, res) => {
  console.log(req.params.id);
  primaryId = req.params.id;
  userId = req.params.uid;
  let qr = `select * from expense where eid=${primaryId} and uid=${userId}`;
  db.query(qr, (err, result) => {
    if (err) {
      console.log(err, "error");
    }
    if (result.length > 0) {
      res.send({
        message: "get single expense successfully",
        data: result,
      });
      console.log(result);
    } else {
      res.send({
        message: "data not found",
      });
    }
  });
});

//get single investment data ===> GET
server.get("/investment/:id", (req, res) => {
  console.log(req.params.id);
  primaryId = req.params.id;
  let qr = `select * from investment where iid=${primaryId}`;
  db.query(qr, (err, result) => {
    if (err) {
      console.log(err, "error");
    }
    if (result.length > 0) {
      res.send({
        message: "get single investment successfully",
        data: result,
      });
      console.log(result);
    } else {
      res.send({
        message: "data not found",
      });
    }
  });
});

//get single investment_category data ===> GET
server.get("/investment_category/:id", (req, res) => {
  console.log(req.params.id);
  primaryId = req.params.id;
  let qr = `select * from investment_category where icid=${primaryId}`;
  db.query(qr, (err, result) => {
    if (err) {
      console.log(err, "error");
    }
    if (result.length > 0) {
      res.send({
        message: "get single investment category successfully",
        data: result,
      });
      console.log(result);
    } else {
      res.send({
        message: "data not found",
      });
    }
  });
});
//get single passive data ===> GET
server.get("/passive/:id", (req, res) => {
  console.log(req.params.id);
  primaryId = req.params.id;
  let qr = `select * from passive where pid=${primaryId}`;
  db.query(qr, (err, result) => {
    if (err) {
      console.log(err, "error");
    }
    if (result.length > 0) {
      res.send({
        message: "get single passive successfully",
        data: result,
      });
      console.log(result);
    } else {
      res.send({
        message: "data not found",
      });
    }
  });
});

//get single salary data ===> GET
server.get("/salary/:id", (req, res) => {
  console.log(req.params.id);
  primaryId = req.params.id;
  let qr = `select * from salary where sid=${primaryId}`;
  db.query(qr, (err, result) => {
    if (err) {
      console.log(err, "error");
    }
    if (result.length > 0) {
      res.send({
        message: "get single salary successfully",
        data: result,
      });
      console.log(result);
    } else {
      res.send({
        message: "data not found",
      });
    }
  });
});

//get single user data ===> GET
server.get("/user/:id", (req, res) => {
  console.log(req.params.id);
  primaryId = req.params.id;
  let qr = `select * from user where uid=${primaryId}`;
  db.query(qr, (err, result) => {
    if (err) {
      console.log(err, "error");
    }
    if (result.length > 0) {
      res.send({
        message: "get single salary successfully",
        data: result,
      });
      console.log(result);
    } else {
      res.send({
        message: "data not found",
      });
    }
  });
});

// ============================= CREATE DATA ==================================
//create user data ===> POST
server.post("/user/create", (req, res) => {
  console.log(req.body, "create data");
  let username = req.body.uusername;
  let password = req.body.upassword;
  let phone = req.body.uphone;
  let mail = req.body.umail;

  let qr = `insert into user(umail,uphone,upassword,uusername) value (
              '${mail}',
              '${phone}',
              '${password}',
              '${username}'
              )`;
  db.query(qr, (err, result) => {
    if (err) {
      console.log(err, "error");
    }
    console.log(result, "result");
    res.send({
      message: "single user data inserted successfully..",
    });
  });
});

//create expense data ===> POST
server.post("/expense/create", (req, res) => {
  console.log(req.body, "create data");
  let uid = req.body.uid;
  let ename = req.body.ename;
  let eamount = req.body.eamount;
  let edate = req.body.edate;
  let eremarks = req.body.eremarks;

  let qr = `insert into expense(uid,ename,eamount,edate,eremarks) value (
              '${uid}',
              '${ename}',
              '${eamount}',
              '${edate}',
              '${eremarks}'
              )`;
  db.query(qr, (err, result) => {
    if (err) {
      console.log(err, "error");
    }
    console.log(result, "result");
    res.send({
      message: "single expense data inserted successfully..",
    });
  });
});
//create investment  data ===> POST
server.post("/investment/create", (req, res) => {
  console.log(req.body, "create data");
  let icid = req.body.icid;
  let uid = req.body.uid;
  let idate = req.body.idate;
  let iamount = req.body.iamount;
  let iremarks = req.body.iremarks;

  let qr = `insert into investment(icid, uid,idate,iamount,iremarks) value (
              '${icid}',
              '${uid}',
              '${idate}',
              '${iamount}',
              '${iremarks}'
              )`;
  db.query(qr, (err, result) => {
    if (err) {
      console.log(err, "error");
    }
    console.log(result, "result");
    res.send({
      message: "single expense data inserted successfully..",
    });
  });
});
//create investment category data ===> POST
server.post("/investment_category/create", (req, res) => {
  console.log(req.body, "create investment category");

  let iname = req.body.iname;
  let istartdate = req.body.istartdate;
  let ienddate = req.body.ienddate;
  let iperiod = req.body.iperiod;

  let qr = `insert into investment(iname,istartdate,ienddate,iperiod) value (
                          '${iname}',
                          '${istartdate}',
                          '${ienddate}',
                          '${iperiod}'
                          )`;
  db.query(qr, (err, result) => {
    if (err) {
      console.log(err, "error");
    }
    console.log(result, "result");
    res.send({
      message: "single expense data inserted successfully..",
    });
  });
});
//create passive data ===> POST
server.post("/passive/create", (req, res) => {
  console.log(req.body, "create data");
  let uid = req.body.uid;
  let pname = req.body.pname;
  let pcompany = req.body.pcompany;
  let pamount = req.body.pamount;
  let pdate = req.body.pdate;
  let premarks = req.body.premarks;

  let qr = `insert into passive(uid,pname,pcompany,pamount,pdate,premarks) value (
                  '${uid}',
                  '${pname}',
                  '${pcompany}',
                  '${pamount}',
                  '${pdate}',
                  '${premarks}'
                  )`;
  db.query(qr, (err, result) => {
    if (err) {
      console.log(err, "error");
    }
    console.log(result, "result");
    res.send({
      message: "single passive data inserted successfully..",
    });
  });
});

//create salary data ===> POST
server.post("/salary/create", (req, res) => {
  console.log(req.body, "create data");
  let uid = req.body.uid;
  let scompany = req.body.scompany;
  let sdate = req.body.sdate;
  let samount = req.body.samount;
  let spf = req.body.spf;
  let sremarks = req.body.sremarks;

  let qr = `insert into salary(uid,scompany,sdate,samount,spf,sremarks) value (
                  '${uid}',
                  '${scompany}',
                  '${sdate}',
                  '${samount}',
                  '${spf}',
                  '${sremarks}'
                  )`;
  db.query(qr, (err, result) => {
    if (err) {
      console.log(err, "error");
    }
    console.log(result, "result");
    res.send({
      message: "single passive data inserted successfully..",
    });
  });
});

//===================================================== UPDATE / MODIFICATION START HERE =====================================
//update user data ===> PUT
server.put("/user/update/:id", (req, res) => {
  primaryId = req.params.id;
  let umail = req.body.umail;
  let uphone = req.body.uphone;
  let upassword = req.body.upassword;
  let uusername = req.body.uusername;

  let qr = `UPDATE user SET 
    umail= '${umail}', 
    uphone= '${uphone}', 
    upassword ='${upassword}', 
    uusername='${uusername}' 
    where uid=${primaryId}`;
  db.query(qr, (err, result) => {
    if (err) {
      console.log(err, "error");
    }
    res.send({
      message: "single user  data updated successfully..",
    });
  });
});

//update expense data
server.put("/expense/update/:id", (req, res) => {
  primaryId = req.params.id;
  let uid = req.body.uid;
  let eamount = req.body.eamount;
  let ename = req.body.ename;
  let edate = req.body.edate;
  let eremarks = req.body.eremarks;
  let qr = `UPDATE expense SET 
        uid= '${uid}', 
        eamount= '${eamount}', 
        ename ='${ename}', 
        edate='${edate}',
        eremarks='${eremarks}'
          where eid=${primaryId}`;
  db.query(qr, (err, result) => {
    if (err) {
      console.log(err, "error");
    }
    res.send({
      message: "single expense   data updated successfully..",
    });
  });
});
//update investment data
server.put("/investment/update/:id", (req, res) => {
  primaryId = req.params.id;
  let icid = req.body.icid;
  let uid = req.body.uid;
  let idate = req.body.idate;
  let iamount = req.body.iamount;
  let iremarks = req.body.iremarks;
  let qr = `UPDATE investment SET 
        icid= '${icid}', 
        uid= '${uid}', 
        idate= '${idate}', 
        iamount ='${iamount}', 
        iremarks='${iremarks}'
          where iid=${primaryId}`;
  db.query(qr, (err, result) => {
    if (err) {
      console.log(err, "error");
    }
    res.send({
      message: "single investment   data updated successfully..",
    });
  });
});
//update investment_category data
server.put("/investment_category/update/:id", (req, res) => {
  primaryId = req.params.id;
  let iname = req.body.iname;
  let istartdate = req.body.istartdate;
  let ienddate = req.body.ienddate;
  let iperiod = req.body.iperiod;
  let qr = `UPDATE investment_category SET 
        iname= '${iname}', 
        istartdate= '${istartdate}', 
        ienddate ='${ienddate}', 
        iperiod='${iperiod}'
          where icid=${primaryId}`;
  db.query(qr, (err, result) => {
    if (err) {
      console.log(err, "error");
    }
    res.send({
      message: "single investment   data updated successfully..",
    });
  });
});
//update passive income data
server.put("/passive/update/:id", (req, res) => {
  primaryId = req.params.id;
  let uid = req.body.uid;
  let pname = req.body.pname;
  let pcompany = req.body.pcompany;
  let pdate = req.body.pdate;
  let premarks = req.body.premarks;
  let qr = `UPDATE passive SET 
            uid= '${uid}', 
            pname= '${pname}', 
            pcompany ='${pcompany}', 
            pdate='${pdate}',
            premarks='${premarks}'
          where pid=${primaryId}`;
  db.query(qr, (err, result) => {
    if (err) {
      console.log(err, "error");
    }
    res.send({
      message: "single passive data updated successfully..",
    });
  });
});
//update salary income data
server.put("/salary/update/:id", (req, res) => {
  primaryId = req.params.id;
  let uid = req.body.uid;
  let scompany = req.body.scompany;
  let sdate = req.body.sdate;
  let samount = req.body.samount;
  let spf = req.body.spf;
  let sremarks = req.body.sremarks;
  let qr = `UPDATE salary SET 
            uid= '${uid}', 
            scompany= '${scompany}', 
            sdate ='${sdate}', 
            samount='${samount}',
            spf='${spf}',
            sremarks='${sremarks}'
          where sid=${primaryId}`;
  db.query(qr, (err, result) => {
    if (err) {
      console.log(err, "error");
    }
    res.send({
      message: "single passive data updated successfully..",
    });
  });
});
server.listen(3000, () => {
  console.log("server running ");
});
