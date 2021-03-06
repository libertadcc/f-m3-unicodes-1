import React from 'react';
import PropTypes from 'prop-types';

class Design extends React.Component {
  render() {
    const {
      actionPalettes,
      state,
      collapse
    } = this.props;
    return (
      <React.Fragment>
        <legend className="hide">Sección de diseña</legend>
        <div
          className="design__container__title js-container-title"
          id="design"
          onClick={collapse}
          data-id="design">
          <div className="design__container__title1">
            <i className="design__icon far fa-object-ungroup" />
            <h2 className="design__title">DISEÑA</h2>
          </div>
          <div className="design__container__title2 container-arrow">
            <i className=
              {`design__img-arrow ${state.isVisible === 'design' ? 'fas fa-chevron-down' : 'fas fa-chevron-up'}`}
            />
          </div>
        </div>
        <div className=
          {`design__container__form ${state.isVisible === 'design' ? '' : 'hidden'}`}
        >
          <h3 className="design__subtitle">COLORES</h3>
          <div>
            <ul className="desing__colors-list">
              <li className="design__form design__form-blue">
                <label className="hide" htmlFor="blue_palette">
                  blue palette
              </label>
                <input
                  id="blue_palette"
                  type="radio"
                  value="1"
                  name="palette"
                  className="radio_btn"
                  onChange={actionPalettes}
                  checked={state.userInfo.palette === 1}
                />
                <ul className="theme">
                  <li
                    className="theme__color"
                    style={{ backgroundColor: '#114e4e' }}
                  />
                  <li
                    className="theme__color"
                    style={{ backgroundColor: '#438792' }}
                  />
                  <li
                    className="theme__color"
                    style={{ backgroundColor: '#a2deaf' }}
                  />
                </ul>
              </li>
              <li className="design__form design__form-red">
                <label className="hide" htmlFor="red_palette">
                  Red palette
              </label>
                <input
                  id="red_palette"
                  type="radio"
                  value="2"
                  name="palette"
                  className="radio_btn"
                  onChange={actionPalettes}
                  checked={state.userInfo.palette === 2}
                />
                <ul className="theme">
                  <li
                    className="theme__color"
                    style={{ backgroundColor: '#420101' }}
                  />
                  <li
                    className="theme__color"
                    style={{ backgroundColor: '#bd1010' }}
                  />
                  <li
                    className="theme__color"
                    style={{ backgroundColor: '#e95626' }}
                  />
                </ul>
              </li>
              <li className="design__form design__form-grey">
                <label className="hide" htmlFor="grey_palette">
                  grey palette
              </label>
                <input
                  id="grey_palette"
                  type="radio"
                  value="3"
                  name="palette"
                  className="radio_btn"
                  onChange={actionPalettes}
                  checked={state.userInfo.palette === 3}
                />
                <ul className="theme">
                  <li
                    className="theme__color"
                    style={{ backgroundColor: '#3e5b65' }}
                  />
                  <li
                    className="theme__color"
                    style={{ backgroundColor: '#dfe5eb' }}
                  />
                  <li
                    className="theme__color"
                    style={{ backgroundColor: '#a0c0cf' }}
                  />
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Design.propTypes={
  actionPalettes: PropTypes.func,
  state: PropTypes.object,
  collapse: PropTypes.func
}

export default Design;
