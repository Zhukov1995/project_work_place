import style from "./MoveIcon.module.css";

interface IMoveIcon {
    isOpenModalConfig: boolean,
    setIsOpenModalConfig: any
}

const MoveIcon = ({ isOpenModalConfig, setIsOpenModalConfig }: IMoveIcon) => {
    return (
        <div className={style.wrap} onClick={() => setIsOpenModalConfig(!isOpenModalConfig)}>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="12" height="12" viewBox="0 0 26 26">
                <path id="Move" d="M19.657,25.042 C19.560,24.908 19.407,24.785 19.379,24.638 C19.331,24.389 19.553,24.216 19.879,24.214 C20.678,24.209 21.476,24.212 22.275,24.212 C22.830,24.212 23.385,24.212 24.009,24.212 C23.909,24.105 23.846,24.034 23.778,23.967 C21.337,21.524 18.894,19.082 16.452,16.639 C16.397,16.584 16.333,16.533 16.293,16.468 C16.184,16.287 16.181,16.102 16.334,15.943 C16.479,15.791 16.656,15.780 16.830,15.887 C16.918,15.940 16.993,16.016 17.067,16.088 C19.497,18.518 21.928,20.948 24.358,23.378 C24.424,23.444 24.493,23.507 24.608,23.617 C24.608,23.472 24.608,23.382 24.608,23.292 C24.608,22.025 24.601,20.757 24.617,19.491 C24.619,19.339 24.703,19.146 24.815,19.049 C25.029,18.863 25.269,18.982 25.438,19.313 C25.438,21.222 25.438,23.132 25.438,25.042 C23.511,25.042 21.584,25.042 19.657,25.042 zM24.609,5.574 C24.607,4.663 24.608,3.752 24.608,2.840 C24.608,2.402 24.608,1.964 24.608,1.469 C24.490,1.580 24.416,1.648 24.345,1.718 C21.920,4.142 19.496,6.567 17.072,8.991 C16.771,9.292 16.532,9.343 16.336,9.148 C16.136,8.950 16.183,8.713 16.484,8.412 C18.908,5.987 21.332,3.563 23.759,1.141 C23.830,1.069 23.927,1.023 24.012,0.964 C23.994,0.933 23.975,0.902 23.956,0.871 C23.866,0.871 23.776,0.871 23.686,0.871 C22.419,0.871 21.152,0.878 19.885,0.862 C19.734,0.860 19.540,0.776 19.445,0.664 C19.260,0.448 19.379,0.208 19.708,0.041 C21.618,0.041 23.528,0.041 25.438,0.041 C25.438,1.969 25.438,3.896 25.438,5.823 C25.304,5.919 25.180,6.073 25.034,6.100 C24.777,6.148 24.610,5.918 24.609,5.574 zM9.045,9.196 C8.958,9.143 8.882,9.068 8.809,8.995 C6.378,6.566 3.948,4.135 1.517,1.705 C1.451,1.640 1.383,1.577 1.267,1.466 C1.267,1.612 1.267,1.702 1.267,1.791 C1.267,3.059 1.274,4.326 1.258,5.593 C1.257,5.744 1.173,5.937 1.060,6.035 C0.847,6.220 0.606,6.101 0.437,5.771 C0.437,3.861 0.437,1.951 0.437,0.041 C2.365,0.041 4.291,0.041 6.219,0.041 C6.315,0.175 6.468,0.298 6.496,0.445 C6.544,0.695 6.322,0.867 5.995,0.869 C5.197,0.875 4.399,0.872 3.600,0.872 C3.045,0.872 2.490,0.872 1.866,0.872 C1.966,0.978 2.029,1.049 2.096,1.116 C4.539,3.559 6.981,6.002 9.423,8.444 C9.478,8.499 9.543,8.550 9.582,8.616 C9.691,8.796 9.695,8.981 9.542,9.141 C9.396,9.292 9.220,9.303 9.045,9.196 zM1.266,19.509 C1.269,20.420 1.267,21.332 1.267,22.243 C1.267,22.681 1.267,23.119 1.267,23.615 C1.385,23.503 1.459,23.436 1.530,23.365 C3.955,20.941 6.379,18.517 8.803,16.092 C9.104,15.791 9.343,15.741 9.539,15.935 C9.739,16.133 9.692,16.371 9.391,16.672 C6.967,19.096 4.543,21.520 2.117,23.943 C2.045,24.014 1.948,24.060 1.863,24.119 C1.882,24.150 1.900,24.181 1.919,24.212 C2.009,24.212 2.099,24.212 2.189,24.212 C3.456,24.212 4.723,24.206 5.990,24.221 C6.141,24.223 6.335,24.307 6.431,24.419 C6.615,24.635 6.496,24.875 6.167,25.042 C4.261,25.042 2.356,25.042 0.437,25.042 C0.437,23.115 0.437,21.188 0.437,19.261 C0.571,19.164 0.695,19.010 0.841,18.983 C1.098,18.935 1.265,19.165 1.266,19.509 z" fill="var(--main-theme-icon)" />
            </svg>
        </div>
    )
}

export default MoveIcon;