const server = require('./api/server');
const winstindex = require('./config/winston');
// const reader = require('xlsx');
const fs = require('fs');
const fastcsv = require("fast-csv");
const port = process.env.PORT || 4000;
const Pool = require("pg").Pool;


// let stream = fs.createReadStream("data.csv");
// let csvData = [];
// let csvStream = fastcsv
//   .parse()
//   .on("data", function(data) {
//     csvData.push(data);
//   })
//   .on("end", function() {
//     csvData.shift();

//     const pool = new Pool({
//       host: "localhost",
//       user: "postgres",
//       database: "taskmanagement",
//       password: "sporty",
//       post: 5432
//     })

//     const query =
//     "INSERT INTO candidates (avatar_url, bio, blog, company, email, followers, following, hireable, id, location, name, public_repos, followers_url,following_url,repos_url,url,login,type, organizations,following_list, follower_list,country, stack, city, geo_location, latitudes, longitudes, address,geometry,crs,  real_url, public_identifier, full_name,occupation, headline,experiences,education, languages, certifications, connections,similarly_named_profiles,  articles,groups, git_id ) VALUES ($1, $2, $3, $4,$5, $6, $7, $8, $9,$10, $11, $12, $13,$14, $15, $16, $17, $18,$19, $20, $21, $22,$23, $24, $25, $26, $27,$28, $29, $30, $31,$32, $33, $34, $35, $36,$37, $38, $39, $40,$41, $42, $43, $44)";

//     pool.connect((err, client, done) => {
//       if (err) throw err;

//       try {
//         csvData.forEach(row => {
//           client.query(query, row, (err, res) => {
//             if (err) {
//               console.log(err.stack);
//             } else {
//               console.log("inserted " + res.rowCount + " row:", row);
//             }
//           });
//         });
//       } finally {
//         done();
//       }
//     });

//   });
// stream.pipe(csvStream);



server.listen(port, err => {
    if (err) return winstindex.info(err.message);
    return winstindex.info(`Application started on http://localhost:${port}`);
  });
  

