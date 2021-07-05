const firebase = require('./firebaseConnect');

module.exports = {
    saveData : (req,callback)=>{
        let projectName = req.body.ProjectName;
        firebase.database().ref("Projects/Pro-"+projectName).set({
          projectName : req.body.ProjectName,
          projectId : req.body.ProjectName,
          projectManager : req.body.ProjectManager,
          teamName : req.body.TeamName,
          teamLead : req.body.TeamLead,
          sectNumber : req.body.SectorNumber,
          addInfo : req.body.AddInfo
        });
        callback(null,{"statuscode":200 ,"Message":"Data Write Sucessfully"});
    }
}