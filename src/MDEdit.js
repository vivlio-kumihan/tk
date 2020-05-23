import React, {Component, useState} from "react"
import SimpleMDE from "react-simplemde-editor"

class MDEdit extends Component {
  handleChange = (value) => {
    this.setState({mdeValue: value})
  }
  toolbar = [
    {
      name: "save",
      action: function customFunction(editor) {
        alert(editor.value())
        // save action
      },
      className: "fa fa-save",
      title: "Save"
    },
    '|',
    'bold',
    'heading',
    '|',
    'quote',
    'unordered-list',
    'ordered-list',
    '|',
    'link',
    'image',
    '|',
    'preview',
    'side-by-side',
    'fullscreen',
    '|',
    'guide',
  ]

  render() {
    return (
      <div id="simple-mde">
        <SimpleMDE  
          id="react-mde"
          label="React simple markdown editor"
          onChange={this.handleChange} 
          options={{
                    spellChecker: false,
                    toolbar: this.toolbar
                  }}
        />
      </div>
    )
  }
}

export default MDEdit


// 動かない自動保存
// import React, { Component } from "react"
// import SimpleMDE from "react-simplemde-editor"

// class MDEdit extends Component {
//   defaultProps = {
//     delay: 1000,
//     value: "**Hello, React!**"
//   }
//   state = {
//     value: localStorage.getItem(`smde_${this.props.id}`) || this.props.value
//   }
//   render() {
//     const { options, delay, id, ...rest } = this.props
//     return (
//       <div id="simple-mde">
//         <SimpleMDE
//           {...rest}
//           id={id}
//           value={this.state.value}
//           options={{
//             autosave: {
//               enabled: true,
//               uniqueId: id,
//               delay
//             },
//             ...options
//           }}
//         />
//       </div>
//     )
//   }
// }

// export default MDEdit