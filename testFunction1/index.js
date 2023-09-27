
/**
 * @swagger
 * /testfunction1:
 *   post:
 *     summary: Retrieve a list of JSONPlaceholder users for test function 1
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
*/
const handler = async (event) => {

  const {req, res} = event
  
  // health check
  if (req.params.health === "health") {
    res.write(JSON.stringify({success: true, msg: "Health check success"}))
    res.end()
    return
  }

  // Add your code here
  res.write(JSON.stringify({success: true, msg: `Happy Hacking`}))
  res.end()
  
}

export default handler
