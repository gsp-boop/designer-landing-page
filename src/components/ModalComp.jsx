import React from "react";

class ModalComp extends React.Component {
  state = {
    modalPopout: false,
  };

  modalPopout = () => {
    this.setState({ modalPopout: !this.state.modalPopout });
  };

  render() {
    const { block } = this.props;
    const { modalPopout } = this.state;

    return (
      <div className="work-container">
        <div
          className="modalCardContainer"
          style={{
            background: `url(${block.img}) `,
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto",
            backgroundPosition: " center bottom",
          }}
        >
          <div onClick={this.modalPopout} className="modal-container">
            <span className="modal-span">{block.location}</span>
            <p className="modal-desc">{block.desc}</p>
          </div>

          <div
            onClick={this.modalPopout}
            className="modal-body"
            style={modalPopout ? { display: "block" } : { display: "none" }}
          >
            <div className="modal">
              <span className="modal-close">&times;</span>
              <div className="popUp-content">
                <div className="modal-content">
                  <h3>{block.header}</h3>
                  <p>{block.detail}</p>
                </div>
                <div className="modal-img-container">
                  <img src={block.img} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ModalComp;
