/**
 * Copyright IBM Corp. 2016, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Close, ChevronRight } from '@carbon/icons-react';

import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { usePrefix } from '../../internal/usePrefix';

/**
 * SideNavFooter is used for rendering the button at the bottom of the side
 * navigation that is a part of the UI Shell. It is responsible for handling the
 * user interaction to expand or collapse the side navigation.
 */
function SideNavFooter({
  assistiveText = 'Toggle opening or closing the side navigation',
  className: customClassName,
  expanded,
  onToggle,
}) {
  const prefix = usePrefix();
  const className = cx(`${prefix}--side-nav__footer`, customClassName);
  return (
    <footer className={className}>
      <button
        className={`${prefix}--side-nav__toggle`}
        type="button"
        onClick={(evt) => onToggle(evt)}
        title={assistiveText}>
        <div className={`${prefix}--side-nav__icon`}>
          {expanded ? <Close size={20} /> : <ChevronRight size={20} />}
        </div>
        <span className={`${prefix}--assistive-text`}>{assistiveText}</span>
      </button>
    </footer>
  );
}

SideNavFooter.displayName = 'SideNavFooter';
SideNavFooter.propTypes = {
  /**
   * Provide text to be read to screen readers and shown as a tooltip when
   * interacting with the toggle button in the footer
   */
  assistiveText: PropTypes.string,

  className: PropTypes.string,

  /**
   * Specify whether the side navigation is expanded or collapsed
   */
  expanded: PropTypes.bool.isRequired,

  /**
   * Provide a function that is called when the toggle button is interacted
   * with. Useful for controlling the expansion state of the side navigation.
   */
  onToggle: PropTypes.func.isRequired,
};

export default SideNavFooter;
