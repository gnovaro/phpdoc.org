import PropTypes from "prop-types"
import React from "react"
import {Link} from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from "@fortawesome/free-brands-svg-icons"

const Header = ({siteTitle}) => (
    <>
        <header className="phpdocumentor-header phpdocumentor-section">
            <h1 className="phpdocumentor-title -without-divider">
              <Link to="/" className="phpdocumentor-title__link">
                  <svg width="46" height="40" viewBox="0 0 46 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginBottom: '-0.5rem'}}>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M43.8938 0L45.5009 2.49244C37.3547 9.69866 33.6041 17.5764 32.4029 24.0936C31.8009 27.3599 31.8413 30.2714 32.2774 32.5817C32.7212 34.9329 33.5431 36.5091 34.3554 37.2827L32.5358 39.6471L0 19.6608L43.8938 0ZM6.40933 20.0771L29.5917 34.3177C29.493 33.9348 29.4055 33.541 29.3294 33.1382C28.8177 30.4269 28.7908 27.1404 29.4526 23.5498C30.4569 18.1012 33.0518 11.9219 37.9998 5.92724L6.40933 20.0771Z" fill="#8DD35F"></path>
                      <path d="M10.9489 20.2992L33.7512 9.75848C26.2148 18.191 26.4081 27.9651 27.4709 30.8399L10.9489 20.2992Z" fill="#8DD35F"></path>
                  </svg>
                  phpDocumentor
              </Link>
            </h1>
            <nav className="phpdocumentor-topnav">
              <ul className="phpdocumentor-topnav__menu -menu">
                <li className="phpdocumentor-topnav__menu-item"><Link to="/about/"><span>About</span></Link></li>
                <li className="phpdocumentor-topnav__menu-item"><a href="//docs.phpdoc.org/3.0/"><span>Documentation</span></a></li>
                <li className="phpdocumentor-topnav__menu-item"><a href="//demo.phpdoc.org/3.0/"><span>Templates</span></a></li>
                <li className="phpdocumentor-topnav__menu-item"><Link to="/contact/"><span>Contact</span></Link></li>
                <li className="phpdocumentor-topnav__menu-item"><a href="https://twitter.com/phpdocumentor"><FontAwesomeIcon icon={Icons.faTwitter} /></a></li>
                <li className="phpdocumentor-topnav__menu-item"><a href="https://github.com/phpdocumentor/phpdocumentor"><FontAwesomeIcon icon={Icons.faGithub} /></a></li>
              </ul>
            </nav>
        </header>
        <section className="phpdocumentor-section phpdocumentor-hero">
          <section className="phpdocumentor-hero__blurb">
            <h2 className="phpdocumentor-hero__blurb-title">Because<br/><em>code</em> and <em>documentation</em><br/>are meant to be together.</h2>
            <p className="phpdocumentor-hero__blurb-slogan">
              phpDocumentor is the de-facto documentation application for PHP
              projects. Your project can benefit too from more than 20 years of experience
              and setting the standard for documenting PHP Applications.
            </p>
            <a className="phpdocumentor-button -primary" href="//docs.phpdoc.org/3.0/">Documentation</a>
          </section>

          <svg width="517" height="243" viewBox="0 0 517 243" fill="none" xmlns="http://www.w3.org/2000/svg" className="phpdocumentor-hero__illustration">
            <rect x="119.135" y="17.9826" width="269.739" height="224.783" fill="#27331F"/>
            <path d="M119.135 7.49275C119.135 3.35462 122.489 0 126.628 0H381.381C385.519 0 388.874 3.35462 388.874 7.49275V17.9826H119.135V7.49275Z" fill="#D9D9D9"/>
            <circle cx="377.421" cy="9.36595" r="4.12101" fill="#C4C4C4"/>
            <circle cx="365.646" cy="9.36595" r="4.12101" fill="#C4C4C4"/>
            <circle cx="353.283" cy="9.36595" r="4.12101" fill="#C4C4C4"/>
            <g clipPath="url(#clip0)">
              <g clipPath="url(#clip1)">
                <line x1="211.296" y1="44.2072" x2="259.999" y2="44.2072" stroke="#83CFFC" strokeWidth="7.49275" strokeLinecap="round"/>
                <line x1="274.984" y1="44.2072" x2="301.209" y2="44.2072" stroke="#EE9949" strokeWidth="7.49275" strokeLinecap="round"/>
                <line x1="316.194" y1="44.2072" x2="323.687" y2="44.2072" stroke="#EE9949" strokeWidth="7.49275" strokeLinecap="round"/>
              </g>
              <g clipPath="url(#clip2)">
                <line x1="211.296" y1="65.1869" x2="224.033" y2="65.1869" stroke="#83CFFC" strokeWidth="7.49275" strokeLinecap="round"/>
                <line x1="239.019" y1="65.1869" x2="362.649" y2="65.1869" stroke="#F7FBFB" strokeWidth="7.49275" strokeLinecap="round"/>
              </g>
              <g clipPath="url(#clip3)">
                <line x1="211.296" y1="86.1667" x2="253.255" y2="86.1667" stroke="#83CFFC" strokeWidth="7.49275" strokeLinecap="round"/>
                <line x1="268.241" y1="86.1667" x2="308.701" y2="86.1667" stroke="#EE9949" strokeWidth="7.49275" strokeLinecap="round"/>
                <line x1="323.687" y1="86.1667" x2="343.917" y2="86.1667" stroke="#F7FBFB" strokeWidth="7.49275" strokeLinecap="round"/>
              </g>
              <g clipPath="url(#clip4)">
                <line x1="211.296" y1="107.146" x2="281.728" y2="107.146" stroke="#F7FBFB" strokeWidth="7.49275" strokeLinecap="round"/>
                <line x1="296.713" y1="107.146" x2="304.206" y2="107.146" stroke="#83CFFC" strokeWidth="7.49275" strokeLinecap="round"/>
                <line x1="319.191" y1="107.146" x2="339.422" y2="107.146" stroke="#EE9949" strokeWidth="7.49275" strokeLinecap="round"/>
                <line x1="354.407" y1="107.146" x2="364.897" y2="107.146" stroke="#EE9949" strokeWidth="7.49275" strokeLinecap="round"/>
              </g>
              <g clipPath="url(#clip5)">
                <line x1="211.296" y1="128.126" x2="218.788" y2="128.126" stroke="#83CFFC" strokeWidth="7.49275" strokeLinecap="round"/>
                <line x1="233.774" y1="128.126" x2="254.004" y2="128.126" stroke="#EE9949" strokeWidth="7.49275" strokeLinecap="round"/>
                <line x1="268.99" y1="128.126" x2="330.43" y2="128.126" stroke="#EE9949" strokeWidth="7.49275" strokeLinecap="round"/>
              </g>
              <g clipPath="url(#clip6)">
                <line x1="211.296" y1="149.106" x2="231.526" y2="149.106" stroke="#83CFFC" strokeWidth="7.49275" strokeLinecap="round"/>
                <line x1="246.512" y1="149.106" x2="266.742" y2="149.106" stroke="#83CFFC" strokeWidth="7.49275" strokeLinecap="round"/>
                <line x1="281.728" y1="149.106" x2="353.658" y2="149.106" stroke="#EE9949" strokeWidth="7.49275" strokeLinecap="round"/>
              </g>
              <g clipPath="url(#clip7)">
                <line x1="211.296" y1="170.086" x2="280.978" y2="170.085" stroke="#F7FBFB" strokeWidth="7.49275" strokeLinecap="round"/>
                <line x1="295.964" y1="170.086" x2="364.897" y2="170.085" stroke="#83CFFC" strokeWidth="7.49275" strokeLinecap="round"/>
              </g>
              <g clipPath="url(#clip8)">
                <line x1="211.296" y1="191.065" x2="250.258" y2="191.065" stroke="#83CFFC" strokeWidth="7.49275" strokeLinecap="round"/>
                <line x1="265.244" y1="191.065" x2="276.483" y2="191.065" stroke="#F7FBFB" strokeWidth="7.49275" strokeLinecap="round"/>
                <line x1="291.468" y1="191.065" x2="343.917" y2="191.065" stroke="#F7FBFB" strokeWidth="7.49275" strokeLinecap="round"/>
              </g>
              <g clipPath="url(#clip9)">
                <line x1="211.296" y1="212.045" x2="268.99" y2="212.045" stroke="#83CFFC" strokeWidth="7.49275" strokeLinecap="round"/>
                <line x1="283.975" y1="212.045" x2="304.206" y2="212.045" stroke="#EE9949" strokeWidth="7.49275" strokeLinecap="round"/>
                <line x1="319.191" y1="212.045" x2="365.646" y2="212.045" stroke="#EE9949" strokeWidth="7.49275" strokeLinecap="round"/>
              </g>
            </g>
            <path d="M141.613 44.9565C141.613 45.3703 141.278 45.7058 140.864 45.7058H131.123C130.709 45.7058 130.374 45.3703 130.374 44.9565V36.7145C130.374 36.3007 130.709 35.9652 131.123 35.9652H134.005C134.199 35.9652 134.386 36.0403 134.525 36.1748L136.338 37.9202C136.477 38.0547 136.664 38.1298 136.858 38.1298H140.864C141.278 38.1298 141.613 38.4652 141.613 38.8791V44.9565Z" fill="#D9D9D9"/>
            <path d="M155.849 65.9363C155.849 66.3501 155.514 66.6855 155.1 66.6855H145.359C144.946 66.6855 144.61 66.3501 144.61 65.9363V57.6942C144.61 57.2804 144.946 56.9449 145.359 56.9449H148.242C148.436 56.9449 148.622 57.0201 148.761 57.1545L150.574 58.9C150.714 59.0344 150.9 59.1095 151.094 59.1095H155.1C155.514 59.1095 155.849 59.445 155.849 59.8588V65.9363Z" fill="#D9D9D9"/>
            <path d="M155.849 87.6652C155.849 88.079 155.514 88.4145 155.1 88.4145H145.359C144.946 88.4145 144.61 88.079 144.61 87.6652V79.4232C144.61 79.0094 144.946 78.6739 145.359 78.6739H148.242C148.436 78.6739 148.622 78.749 148.761 78.8835L150.574 80.6289C150.714 80.7634 150.9 80.8385 151.094 80.8385H155.1C155.514 80.8385 155.849 81.1739 155.849 81.5878V87.6652Z" fill="#D9D9D9"/>
            <path d="M170.085 108.645C170.085 109.059 169.75 109.394 169.336 109.394H159.596C159.182 109.394 158.846 109.059 158.846 108.645V100.403C158.846 99.9891 159.182 99.6536 159.596 99.6536H162.478C162.672 99.6536 162.858 99.7287 162.998 99.8632L164.81 101.609C164.95 101.743 165.136 101.818 165.33 101.818H169.336C169.75 101.818 170.085 102.154 170.085 102.567V108.645Z" fill="#D9D9D9"/>
            <path d="M141.613 130.374C141.613 130.788 141.278 131.123 140.864 131.123H131.123C130.709 131.123 130.374 130.788 130.374 130.374V122.132C130.374 121.718 130.709 121.383 131.123 121.383H134.005C134.199 121.383 134.386 121.458 134.525 121.592L136.338 123.338C136.477 123.472 136.664 123.547 136.858 123.547H140.864C141.278 123.547 141.613 123.883 141.613 124.296V130.374Z" fill="#D9D9D9"/>
            <path d="M155.849 151.354C155.849 151.767 155.514 152.103 155.1 152.103H145.359C144.946 152.103 144.61 151.767 144.61 151.354V143.112C144.61 142.698 144.946 142.362 145.359 142.362H148.242C148.436 142.362 148.622 142.437 148.761 142.572L150.574 144.317C150.714 144.452 150.9 144.527 151.094 144.527H155.1C155.514 144.527 155.849 144.862 155.849 145.276V151.354Z" fill="#D9D9D9"/>
            <path d="M155.849 172.333C155.849 172.747 155.514 173.083 155.1 173.083H145.359C144.946 173.083 144.61 172.747 144.61 172.333V164.091C144.61 163.677 144.946 163.342 145.359 163.342H148.242C148.436 163.342 148.622 163.417 148.761 163.552L150.574 165.297C150.714 165.431 150.9 165.507 151.094 165.507H155.1C155.514 165.507 155.849 165.842 155.849 166.256V172.333Z" fill="#D9D9D9"/>
            <path d="M141.613 194.062C141.613 194.476 141.278 194.812 140.864 194.812H131.123C130.709 194.812 130.374 194.476 130.374 194.062V185.82C130.374 185.406 130.709 185.071 131.123 185.071H134.005C134.199 185.071 134.386 185.146 134.525 185.281L136.338 187.026C136.477 187.16 136.664 187.236 136.858 187.236H140.864C141.278 187.236 141.613 187.571 141.613 187.985V194.062Z" fill="#D9D9D9"/>
            <path d="M155.849 215.042C155.849 215.456 155.514 215.791 155.1 215.791H145.359C144.946 215.791 144.61 215.456 144.61 215.042V206.8C144.61 206.386 144.946 206.051 145.359 206.051H148.242C148.436 206.051 148.622 206.126 148.761 206.26L150.574 208.006C150.714 208.14 150.9 208.215 151.094 208.215H155.1C155.514 208.215 155.849 208.551 155.849 208.965V215.042Z" fill="#D9D9D9"/>
            <line x1="194.812" y1="31.4696" x2="194.812" y2="232.275" stroke="#83CFFC" strokeWidth="1.49855"/>
            <line x1="133.746" y1="76.8007" x2="133.746" y2="108.27" stroke="#8DD35F" strokeWidth="2.24783" strokeLinecap="round"/>
            <line x1="133.371" y1="93.2848" x2="82.4204" y2="93.2848" stroke="#8DD35F" strokeWidth="2.24783"/>
            <circle cx="82.4202" cy="92.9102" r="5.24493" fill="#8DD35F"/>
            <line x1="2.62246" y1="66.3109" x2="43.7448" y2="66.3109" stroke="#8DD35F" strokeWidth="5.24493" strokeLinecap="round"/>
            <line x1="2.62246" y1="76.7305" x2="64.063" y2="76.7305" stroke="#8DD35F" strokeWidth="5.24493" strokeLinecap="round"/>
            <line x1="2.62246" y1="87.1501" x2="53.6434" y2="87.1501" stroke="#8DD35F" strokeWidth="5.24493" strokeLinecap="round"/>
            <line x1="2.62246" y1="97.5697" x2="55.2064" y2="97.5697" stroke="#8DD35F" strokeWidth="5.24493" strokeLinecap="round"/>
            <line x1="2.62246" y1="107.989" x2="36.4511" y2="107.989" stroke="#8DD35F" strokeWidth="5.24493" strokeLinecap="round"/>
            <line x1="429.335" y1="65.5616" x2="378.384" y2="65.5616" stroke="#8DD35F" strokeWidth="2.24783"/>
            <circle cx="378.384" cy="65.1869" r="5.24493" fill="#8DD35F"/>
            <circle cx="430.833" cy="65.1869" r="5.24493" fill="#8DD35F"/>
            <line x1="452.937" y1="45.3312" x2="494.059" y2="45.3312" stroke="#8DD35F" strokeWidth="5.24493" strokeLinecap="round"/>
            <line x1="452.937" y1="55.7508" x2="514.378" y2="55.7508" stroke="#8DD35F" strokeWidth="5.24493" strokeLinecap="round"/>
            <line x1="452.937" y1="66.1704" x2="503.958" y2="66.1704" stroke="#8DD35F" strokeWidth="5.24493" strokeLinecap="round"/>
            <line x1="452.937" y1="76.59" x2="505.521" y2="76.59" stroke="#8DD35F" strokeWidth="5.24493" strokeLinecap="round"/>
            <line x1="452.937" y1="87.0096" x2="486.766" y2="87.0096" stroke="#8DD35F" strokeWidth="5.24493" strokeLinecap="round"/>
            <line x1="429.335" y1="170.46" x2="378.384" y2="170.46" stroke="#8DD35F" strokeWidth="2.24783"/>
            <circle cx="378.384" cy="170.086" r="5.24493" fill="#8DD35F"/>
            <circle cx="430.833" cy="170.086" r="5.24493" fill="#8DD35F"/>
            <line x1="452.937" y1="150.23" x2="494.059" y2="150.23" stroke="#8DD35F" strokeWidth="5.24493" strokeLinecap="round"/>
            <line x1="452.937" y1="160.649" x2="514.378" y2="160.649" stroke="#8DD35F" strokeWidth="5.24493" strokeLinecap="round"/>
            <line x1="452.937" y1="171.069" x2="503.958" y2="171.069" stroke="#8DD35F" strokeWidth="5.24493" strokeLinecap="round"/>
            <line x1="452.937" y1="181.489" x2="505.521" y2="181.489" stroke="#8DD35F" strokeWidth="5.24493" strokeLinecap="round"/>
            <line x1="452.937" y1="191.908" x2="486.766" y2="191.908" stroke="#8DD35F" strokeWidth="5.24493" strokeLinecap="round"/>
            <defs>
              <clipPath id="clip0">
                <rect width="161.843" height="182.823" fill="white" transform="translate(207.549 40.4609)"/>
              </clipPath>
              <clipPath id="clip1">
                <rect width="119.884" height="14.9855" fill="white" transform="translate(207.549 40.4609)"/>
              </clipPath>
              <clipPath id="clip2">
                <rect width="158.846" height="14.9855" fill="white" transform="translate(207.549 61.4406)"/>
              </clipPath>
              <clipPath id="clip3">
                <rect width="140.115" height="14.9855" fill="white" transform="translate(207.549 82.4203)"/>
              </clipPath>
              <clipPath id="clip4">
                <rect width="161.094" height="14.9855" fill="white" transform="translate(207.549 103.4)"/>
              </clipPath>
              <clipPath id="clip5">
                <rect width="126.628" height="14.9855" fill="white" transform="translate(207.549 124.38)"/>
              </clipPath>
              <clipPath id="clip6">
                <rect width="149.855" height="14.9855" fill="white" transform="translate(207.549 145.359)"/>
              </clipPath>
              <clipPath id="clip7">
                <rect width="161.094" height="14.9855" fill="white" transform="translate(207.549 166.339)"/>
              </clipPath>
              <clipPath id="clip8">
                <rect width="140.115" height="14.9855" fill="white" transform="translate(207.549 187.319)"/>
              </clipPath>
              <clipPath id="clip9">
                <rect width="161.843" height="14.9855" fill="white" transform="translate(207.549 208.299)"/>
              </clipPath>
            </defs>
          </svg>
        </section>
    </>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header
