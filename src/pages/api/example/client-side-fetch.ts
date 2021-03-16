import {getUserProfileData} from "src/server/bff/api/example/clientSideFetch";

export default function handler(req, res) {
  const profileData = getUserProfileData(req.user.id)
  const jsonStr = JSON.stringify(profileData)

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(jsonStr)
}