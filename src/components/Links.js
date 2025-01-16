import React from 'react'

function Links({github,linkedin}) {
  return (
    <div>
      <h3>Links</h3>
      {/* Render Github and LinkedIn links */}
      <a href={github} target="blank">
        {github}
      </a>
      <br/>
      <a href={linkedin} target="blank">

      </a>

    </div>
  )
}

export default Links
