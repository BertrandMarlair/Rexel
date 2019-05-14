import React from "react"
import Display from "container/configurator/Display";

const Configurator = props => <Display page={props.match.params.page} />

export default Configurator