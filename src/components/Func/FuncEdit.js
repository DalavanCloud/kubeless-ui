/*
Copyright 2017 Bitnami.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

// @flow
import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import type { Func } from 'utils/Types'
import FuncParams from './FuncParams'

export default class FuncEdit extends Component {

  props: {
    func?: Func,
    open?: boolean,
    onDismiss: () => void,
    onDone: ({}) => void
  }

  donePressed = () => {
    const params = this.refs.funcParams.getParams()
    this.props.onDone(params)
  }

  render() {
    const { func, open, onDismiss } = this.props

    const dialogActions = [
      <a className='button button-secondary' onClick={onDismiss}>
        Cancel
      </a>,
      <a className='button button-primary' onClick={this.donePressed}>
        Save
      </a>
    ]

    return (
      <Dialog
        title={<h2>Edit Function</h2>}
        modal={false}
        actions={dialogActions}
        open={!!open}
        onRequestClose={onDismiss}
        contentStyle={{ maxWidth: '600px' }}
        autoScrollBodyContent
      >
        <div className='editFunc'>
          <FuncParams ref='funcParams' func={func} />
        </div>
      </Dialog>
    )
  }

}
