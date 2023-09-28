const endpoint = `https://api.cloudflare.com/client/v4/accounts/${process.env.ACCOUNT_ID}/pages/projects/${process.env.PROJECT_NAME}/deployments`

const deployments = await (
  await fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${process.env.TOKEN}`,
      "Content-Type": "application/json",
    },
  })
).json()

console.log(`# of Deployments: ${deployments.result_info.total_count}`)

for (const deployment of deployments.result) {
  if ((Date.now() - Number(new Date(deployment.created_on))) / 86400000 > 7) {
    console.log(
      await (
        await fetch(`${endpoint}/${deployment.id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${process.env.TOKEN}`,
            "Content-Type": "application/json",
          },
        })
      ).json(),
    )
  }
}

console.log(`Remaining Deployments: ${deployments.result_info.total_count}`)
