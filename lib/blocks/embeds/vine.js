import React from 'react';
import BaseEmbed from './base';

class Vine extends BaseEmbed {

  constructor(props) {
    super(props);
    this.loadExternalScript = this.loadExternalScript.bind(this);
    //this.extraHandler = this.extraHandler.bind(this)
  }

  loadExternalScript() {
    if(typeof window === 'undefined') {
      return;
    }
    var scriptUrl = this.props.scriptUrl;
    var tag = document.createElement('script');
    tag.src = scriptUrl;
    tag.async = 1;
    window.document.body.appendChild(tag);
  }

  extraHandler() {
    this.loadExternalScript();
  }

  render() {
    if(this.state.valid) {
      return (
        <div className="katap-embed katap-vimeo">
          <iframe
            className="vine-embed"
            src={'//vine.co/v/'+this.state.id+'/embed/postcard'}
            frameBorder={0}
            width={600}
            height={600}
            allowFullScreen={true} />
        </div>
      );
    }
    return (
      <div className="katap-embed">Invalid Vimeo URL.</div>
    );
  }


}

Vine.defaultProps = {
  regex: /https?:\/\/vine\.co\/v\/([a-zA-Z0-9].*)\/?/,
  scriptUrl: '//platform.vine.co/static/scripts/embed.js'
};

export default Vine;