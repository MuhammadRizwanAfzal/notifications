// @flow
import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

function ThumbsUpIcon({ viewBox, color, ...props }) {
  return (
    <SvgIcon viewBox={viewBox} {...props}>
      <g>
        <g>
          <path
            d="M512,304c0-12.821-5.099-24.768-13.888-33.579c9.963-10.901,15.04-25.515,13.653-40.725
            c-2.496-27.115-26.923-48.363-55.637-48.363H324.352c6.528-19.819,16.981-56.149,16.981-85.333c0-46.272-39.317-85.333-64-85.333
            c-22.144,0-37.995,12.48-38.656,12.992c-2.539,2.027-4.011,5.099-4.011,8.341v72.341L173.205,237.44l-2.539,1.301v-4.075
            c0-5.888-4.779-10.667-10.667-10.667H53.333C23.915,224,0,247.915,0,277.333V448c0,29.419,23.915,53.333,53.333,53.333h64
            c23.061,0,42.773-14.72,50.197-35.264C185.28,475.2,209.173,480,224,480h195.819c23.232,0,43.563-15.659,48.341-37.248
            c2.453-11.136,1.024-22.336-3.84-32.064c15.744-7.915,26.347-24.192,26.347-42.688c0-7.552-1.728-14.784-4.992-21.312
            C501.419,338.752,512,322.496,512,304z M467.008,330.325c-4.117,0.491-7.595,3.285-8.917,7.232
            c-1.301,3.947-0.213,8.277,2.816,11.136c5.419,5.099,8.427,11.968,8.427,19.307c0,13.461-10.176,24.768-23.637,26.325
            c-4.117,0.491-7.595,3.285-8.917,7.232c-1.301,3.947-0.213,8.277,2.816,11.136c7.019,6.613,9.835,15.893,7.723,25.451
            c-2.624,11.904-14.187,20.523-27.499,20.523H224c-17.323,0-46.379-8.128-56.448-18.219c-3.051-3.029-7.659-3.925-11.627-2.304
            c-3.989,1.643-6.592,5.547-6.592,9.856c0,17.643-14.357,32-32,32h-64c-17.643,0-32-14.357-32-32V277.333c0-17.643,14.357-32,32-32
            h96V256c0,3.691,1.92,7.125,5.077,9.088c3.115,1.877,7.04,2.069,10.368,0.448l21.333-10.667c2.155-1.067,3.883-2.859,4.907-5.056
            l64-138.667c0.64-1.408,0.981-2.944,0.981-4.48V37.781C260.437,35.328,268.139,32,277.333,32C289.024,32,320,61.056,320,96
            c0,37.547-20.437,91.669-20.629,92.203c-1.237,3.264-0.811,6.955,1.173,9.856c2.005,2.88,5.291,4.608,8.789,4.608h146.795
            c17.792,0,32.896,12.736,34.389,28.992c1.131,12.16-4.715,23.723-15.189,30.187c-3.264,2.005-5.205,5.632-5.056,9.493
            s2.368,7.317,5.781,9.088c9.024,4.587,14.613,13.632,14.613,23.573C490.667,317.461,480.491,328.768,467.008,330.325z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M160,245.333c-5.888,0-10.667,4.779-10.667,10.667v192c0,5.888,4.779,10.667,10.667,10.667s10.667-4.779,10.667-10.667
            V256C170.667,250.112,165.888,245.333,160,245.333z"
          />
        </g>
      </g>
    </SvgIcon>
  );
}

ThumbsUpIcon.defaultProps = {
  color: "gray",
  viewBox: "",
};
export default ThumbsUpIcon;
