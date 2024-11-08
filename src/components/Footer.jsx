import React from 'react'
import XIcon from '@mui/icons-material/X';

const Footer = () => {
    return (
        <>
            <hr className='bg-[#44444456] h-[1.5px] sm:w-[95%] xl:w-[1300px] sm:mx-auto mt-14 lg:mt-16 mb-10 lg:mb-8' />
            <div className="lg:block hidden">
                <div className="w-full flex items-center justify-center">
                    <div className="md:w-[80%] w-full px-4 text-white flex flex-col">
                        <div className="flex flex-col">
                            <div className="flex mb-8 flex-row items-center justify-between">
                                <div>
                                    <svg width="174" height="32" viewBox="0 0 174 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.5227 10.3016V15.5816H14.1727C13.7927 14.1216 13.2927 13.1216 12.6727 12.5816C12.0727 12.0416 11.1927 11.7716 10.0327 11.7716H6.10266V20.1116H9.40266C10.2027 20.1116 10.8027 19.9416 11.2027 19.6016C11.6027 19.2416 11.9527 18.5616 12.2527 17.5616H13.4227V24.8516H12.2527C11.9527 23.5516 11.5927 22.6916 11.1727 22.2716C10.7527 21.8516 10.0927 21.6416 9.19266 21.6416H6.10266V28.2116C6.10266 28.6916 6.19266 29.0316 6.37266 29.2316C6.55266 29.4116 6.91266 29.5416 7.45266 29.6216L8.50266 29.7416V31.0016H0.222656V29.7416L1.09266 29.6216C1.57266 29.5416 1.88266 29.4116 2.02266 29.2316C2.16266 29.0516 2.23266 28.7116 2.23266 28.2116V13.0916C2.23266 12.5916 2.16266 12.2516 2.02266 12.0716C1.88266 11.8916 1.57266 11.7616 1.09266 11.6816L0.222656 11.5616V10.3016H15.5227Z" fill="#FE1940" />
                                        <path d="M16.9512 31.0016V29.7416L17.8212 29.6216C18.3012 29.5416 18.6112 29.4116 18.7512 29.2316C18.8912 29.0516 18.9612 28.7116 18.9612 28.2116V13.0916C18.9612 12.5916 18.8912 12.2516 18.7512 12.0716C18.6112 11.8916 18.3012 11.7616 17.8212 11.6816L16.9512 11.5616V10.3016H24.8412V11.5616L23.9712 11.6816C23.5112 11.7616 23.2012 11.9016 23.0412 12.1016C22.9012 12.2816 22.8312 12.6116 22.8312 13.0916V28.2116C22.8312 28.6916 22.9012 29.0316 23.0412 29.2316C23.2012 29.4116 23.5112 29.5416 23.9712 29.6216L24.8412 29.7416V31.0016H16.9512Z" fill="#FE1940" />
                                        <path d="M38.4455 21.2816L44.3255 30.4016C43.5255 31.0216 42.5855 31.3316 41.5055 31.3316C40.8655 31.3316 40.3555 31.1716 39.9755 30.8516C39.5955 30.5316 39.1955 29.9516 38.7755 29.1116C38.5555 28.6916 37.2755 26.2516 34.9355 21.7916H32.2355V28.2116C32.2355 28.6916 32.3055 29.0316 32.4455 29.2316C32.6055 29.4116 32.9155 29.5416 33.3755 29.6216L34.2755 29.7416V31.0016H26.3555V29.7416L27.2255 29.6216C27.7055 29.5416 28.0155 29.4116 28.1555 29.2316C28.2955 29.0516 28.3655 28.7116 28.3655 28.2116V13.0916C28.3655 12.5916 28.2955 12.2516 28.1555 12.0716C28.0155 11.8916 27.7055 11.7616 27.2255 11.6816L26.3555 11.5616V10.3016H36.4955C40.9555 10.3016 43.1855 12.0116 43.1855 15.4316C43.1855 16.8316 42.7655 18.0416 41.9255 19.0616C41.0855 20.0616 39.9255 20.8016 38.4455 21.2816ZM32.2355 11.7716V20.3516H34.8455C36.3255 20.3516 37.4155 20.0216 38.1155 19.3616C38.8155 18.6816 39.1655 17.5816 39.1655 16.0616C39.1655 14.5616 38.8555 13.4716 38.2355 12.7916C37.6155 12.1116 36.6155 11.7716 35.2355 11.7716H32.2355Z" fill="#FE1940" />
                                        <path d="M46.1241 30.1616V24.7316H47.3241L47.6241 25.7516C48.0241 27.0916 48.7341 28.1416 49.7541 28.9016C50.7941 29.6416 51.9541 30.0116 53.2341 30.0116C55.5541 30.0116 56.7141 28.9916 56.7141 26.9516C56.7141 26.1516 56.4941 25.4716 56.0541 24.9116C55.6541 24.3716 55.1641 23.9216 54.5841 23.5616C54.0241 23.2016 53.1241 22.7416 51.8841 22.1816C50.7241 21.6616 49.7341 21.1616 48.9141 20.6816C47.1141 19.5816 46.2141 18.0316 46.2141 16.0316C46.2141 14.0116 46.9041 12.4716 48.2841 11.4116C49.6841 10.3316 51.3641 9.79156 53.3241 9.79156C55.4041 9.79156 57.2241 10.1016 58.7841 10.7216V15.6116H57.5841C56.9041 12.6516 55.2741 11.1716 52.6941 11.1716C51.7341 11.1716 50.9441 11.4316 50.3241 11.9516C49.7041 12.4716 49.3941 13.1516 49.3941 13.9916C49.3941 14.6516 49.5941 15.2416 49.9941 15.7616C50.3741 16.2216 50.8341 16.6116 51.3741 16.9316C51.9141 17.2516 52.7541 17.6716 53.8941 18.1916C55.2341 18.7916 56.3041 19.3416 57.1041 19.8416C59.0841 21.0216 60.0741 22.7416 60.0741 25.0016C60.0741 27.0216 59.4241 28.6116 58.1241 29.7716C56.8241 30.9116 55.0741 31.4816 52.8741 31.4816C50.2941 31.4816 48.0441 31.0416 46.1241 30.1616Z" fill="#FE1940" />
                                        <path d="M77.5793 15.9716H76.3793L76.1693 15.0116C75.8693 13.6716 75.5693 12.8416 75.2693 12.5216C74.9893 12.1816 74.3993 12.0116 73.4993 12.0116H71.0993V28.2116C71.0993 28.6916 71.1893 29.0316 71.3693 29.2316C71.5493 29.4116 71.9093 29.5416 72.4493 29.6216L73.4993 29.7416V31.0016H64.8293V29.7416L65.8793 29.6216C66.4193 29.5416 66.7793 29.4116 66.9593 29.2316C67.1393 29.0316 67.2293 28.6916 67.2293 28.2116V12.0116H64.8593C63.9393 12.0516 63.3493 12.2116 63.0893 12.4916C62.8493 12.7516 62.5493 13.5916 62.1893 15.0116L61.9793 15.9716H60.7493V10.3016H77.5793V15.9716Z" fill="#FE1940" />
                                        <path d="M92.1705 25.1216H92.9505V31.0016H79.1205V30.2516L80.3205 30.1016C80.8605 30.0216 81.2206 29.9116 81.4006 29.7716C81.5806 29.6316 81.6705 29.3916 81.6705 29.0516V12.2516C81.6705 11.9116 81.5806 11.6716 81.4006 11.5316C81.2406 11.3716 80.8805 11.2616 80.3205 11.2016L79.1205 11.0516V10.3016H85.9905V11.0516L84.7906 11.2016C84.2506 11.2816 83.8905 11.3916 83.7105 11.5316C83.5305 11.6716 83.4405 11.9116 83.4405 12.2516V30.1616H87.9405C89.3005 30.1616 90.2805 29.8416 90.8805 29.2016C91.4805 28.5416 91.9105 27.1816 92.1705 25.1216Z" fill="black" />
                                        <path d="M94.8363 21.2216C94.7963 17.7816 95.7863 15.0016 97.8063 12.8816C99.8463 10.7616 102.376 9.72156 105.396 9.76156C108.376 9.76156 110.756 10.7216 112.536 12.6416C114.336 14.5416 115.236 17.0216 115.236 20.0816C115.276 23.4816 114.276 26.2416 112.236 28.3616C110.196 30.4816 107.676 31.5216 104.676 31.4816C101.696 31.4816 99.3063 30.5316 97.5063 28.6316C95.7263 26.7316 94.8363 24.2616 94.8363 21.2216ZM113.316 20.9816C113.316 17.6616 112.566 15.1216 111.066 13.3616C109.566 11.5816 107.506 10.6916 104.886 10.6916C102.366 10.6916 100.386 11.5616 98.9463 13.3016C97.5063 15.0216 96.7863 17.3216 96.7863 20.2016C96.7863 23.5416 97.5263 26.0916 99.0063 27.8516C100.506 29.6116 102.576 30.4916 105.216 30.4916C107.736 30.4916 109.716 29.6416 111.156 27.9416C112.596 26.2416 113.316 23.9216 113.316 20.9816Z" fill="black" />
                                        <path d="M118.01 21.2216C117.97 17.7816 118.96 15.0016 120.98 12.8816C123.02 10.7616 125.55 9.72156 128.57 9.76156C131.55 9.76156 133.93 10.7216 135.71 12.6416C137.51 14.5416 138.41 17.0216 138.41 20.0816C138.45 23.4816 137.45 26.2416 135.41 28.3616C133.37 30.4816 130.85 31.5216 127.85 31.4816C124.87 31.4816 122.48 30.5316 120.68 28.6316C118.9 26.7316 118.01 24.2616 118.01 21.2216ZM136.49 20.9816C136.49 17.6616 135.74 15.1216 134.24 13.3616C132.74 11.5816 130.68 10.6916 128.06 10.6916C125.54 10.6916 123.56 11.5616 122.12 13.3016C120.68 15.0216 119.96 17.3216 119.96 20.2016C119.96 23.5416 120.7 26.0916 122.18 27.8516C123.68 29.6116 125.75 30.4916 128.39 30.4916C130.91 30.4916 132.89 29.6416 134.33 27.9416C135.77 26.2416 136.49 23.9216 136.49 20.9816Z" fill="black" />
                                        <path d="M153.667 14.1116L149.677 18.9416L157.687 30.8216C157.327 31.1216 156.947 31.2716 156.547 31.2716C156.207 31.2716 155.917 31.1716 155.677 30.9716C155.437 30.7716 155.147 30.4216 154.807 29.9216L148.537 20.3216L144.847 24.7916V29.0516C144.847 29.3916 144.937 29.6416 145.117 29.8016C145.297 29.9416 145.677 30.0416 146.257 30.1016L147.547 30.2516V31.0016H140.527V30.2516L141.727 30.1016C142.267 30.0216 142.627 29.9116 142.807 29.7716C142.987 29.6316 143.077 29.3916 143.077 29.0516V12.2516C143.077 11.9116 142.987 11.6716 142.807 11.5316C142.647 11.3716 142.287 11.2616 141.727 11.2016L140.527 11.0516V10.3016H147.397V11.0516L146.197 11.2016C145.657 11.2816 145.297 11.3916 145.117 11.5316C144.937 11.6716 144.847 11.9116 144.847 12.2516V23.4716L152.497 14.1116L153.187 13.2716C153.867 12.4916 154.207 11.9616 154.207 11.6816C154.207 11.4216 153.907 11.2616 153.307 11.2016L151.717 11.0516V10.3016H158.227V11.0516L157.267 11.2016C156.767 11.2816 156.247 11.5416 155.707 11.9816C155.167 12.4016 154.487 13.1116 153.667 14.1116Z" fill="black" />
                                        <path d="M165.412 1.82156H165.082L165.032 1.54156C164.945 1.08156 164.862 0.804896 164.782 0.711563C164.709 0.61823 164.489 0.55823 164.122 0.531563H163.162V6.21156C163.162 6.35156 163.192 6.44823 163.252 6.50156C163.319 6.5549 163.455 6.5949 163.662 6.62156L164.082 6.67156V7.00156H161.322V6.67156L161.742 6.62156C161.942 6.5949 162.072 6.5549 162.132 6.50156C162.199 6.44823 162.232 6.35156 162.232 6.21156V0.531563H161.272C161.119 0.53823 161.022 0.541563 160.982 0.541563C160.942 0.541563 160.879 0.554896 160.792 0.581563C160.705 0.60823 160.655 0.634896 160.642 0.661563C160.629 0.688229 160.599 0.748229 160.552 0.841563C160.505 0.928229 160.472 1.01823 160.452 1.11156C160.432 1.2049 160.402 1.34823 160.362 1.54156L160.312 1.82156H159.992V0.101562H165.412V1.82156Z" fill="black" />
                                        <path d="M173.458 6.62156L173.808 6.67156V7.00156H171.298V6.67156L171.688 6.62156C171.848 6.60823 171.958 6.58156 172.018 6.54156C172.078 6.4949 172.108 6.42156 172.108 6.32156L172.098 6.22156L171.538 0.771563L169.538 7.01156H169.318L167.358 0.801563L166.848 5.16156C166.801 5.54156 166.778 5.82156 166.778 6.00156C166.778 6.20156 166.805 6.34823 166.858 6.44156C166.918 6.52823 167.025 6.5849 167.178 6.61156L167.558 6.67156V7.00156H165.448V6.67156L165.788 6.62156C165.995 6.58156 166.131 6.47823 166.198 6.31156C166.271 6.13823 166.348 5.7549 166.428 5.16156L166.828 1.94156C166.881 1.52823 166.908 1.23156 166.908 1.05156C166.908 0.871563 166.881 0.738229 166.828 0.651563C166.781 0.564896 166.695 0.50823 166.568 0.481563L166.228 0.431563V0.101562H168.108L169.678 5.23156L171.368 0.101562H173.178V0.431563L172.828 0.481563C172.688 0.501563 172.591 0.534896 172.538 0.581563C172.485 0.621563 172.458 0.688229 172.458 0.781563L172.998 6.22156C173.011 6.3549 173.048 6.44823 173.108 6.50156C173.168 6.5549 173.285 6.5949 173.458 6.62156Z" fill="black" />
                                    </svg>
                                </div>
                                <div className="flex justify-center items-center w-full space-x-12">
                                    <p className='text-[#444444] font-antonia'>© 2024 BY FIRSTLOOK</p>
                                </div>
                                <div className="flex flex-row space-x-8 items-end justify-end">
                                    <a className='transform transition-transform duration-100 ease-in-out hover:scale-110 active:scale-95' href='https://www.facebook.com/firstlookappofficial?mibextid=ZbWKwL'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24 17.028C24 21.396 21.396 24 17.028 24H15.6C14.94 24 14.4 23.46 14.4 22.8V15.876C14.4 15.552 14.664 15.276 14.988 15.276L17.1 15.24C17.268 15.228 17.412 15.108 17.448 14.94L17.868 12.648C17.904 12.432 17.736 12.228 17.508 12.228L14.952 12.264C14.616 12.264 14.352 12 14.34 11.676L14.292 8.736C14.292 8.544 14.448 8.37601 14.652 8.37601L17.532 8.328C17.736 8.328 17.892 8.17201 17.892 7.96801L17.844 5.08799C17.844 4.88399 17.688 4.728 17.484 4.728L14.244 4.77601C12.252 4.81201 10.668 6.444 10.704 8.436L10.764 11.736C10.776 12.072 10.512 12.336 10.176 12.348L8.736 12.372C8.532 12.372 8.37601 12.528 8.37601 12.732L8.41201 15.012C8.41201 15.216 8.568 15.372 8.772 15.372L10.212 15.348C10.548 15.348 10.812 15.612 10.824 15.936L10.932 22.776C10.944 23.448 10.404 24 9.732 24H6.972C2.604 24 0 21.396 0 17.016V6.972C0 2.604 2.604 0 6.972 0H17.028C21.396 0 24 2.604 24 6.972V17.028Z" fill="#FE1940" />
                                        </svg>
                                    </a>
                                    <a className='transform transition-transform duration-100 ease-in-out hover:scale-110 active:scale-95' href='https://www.instagram.com/firstlook_app?igsh=aXlsbmx3dm96bHo2'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.028 0H6.972C2.604 0 0 2.604 0 6.972V17.016C0 21.396 2.604 24 6.972 24H17.016C21.384 24 23.988 21.396 23.988 17.028V6.972C24 2.604 21.396 0 17.028 0ZM12 16.656C9.432 16.656 7.344 14.568 7.344 12C7.344 9.432 9.432 7.344 12 7.344C14.568 7.344 16.656 9.432 16.656 12C16.656 14.568 14.568 16.656 12 16.656ZM19.104 5.856C19.044 6 18.96 6.132 18.852 6.252C18.732 6.36 18.6 6.444 18.456 6.504C18.312 6.564 18.156 6.6 18 6.6C17.676 6.6 17.376 6.48 17.148 6.252C17.04 6.132 16.956 6 16.896 5.856C16.836 5.712 16.8 5.556 16.8 5.4C16.8 5.244 16.836 5.088 16.896 4.944C16.956 4.788 17.04 4.668 17.148 4.548C17.424 4.272 17.844 4.14 18.228 4.224C18.312 4.236 18.384 4.26 18.456 4.296C18.528 4.32 18.6 4.356 18.672 4.404C18.732 4.44 18.792 4.5 18.852 4.548C18.96 4.668 19.044 4.788 19.104 4.944C19.164 5.088 19.2 5.244 19.2 5.4C19.2 5.556 19.164 5.712 19.104 5.856Z" fill="#FE1940" />
                                        </svg>
                                    </a>
                                    <a className='bg-[#FE1940] rounded-lg px-1 transform transition-transform duration-100 ease-in-out hover:scale-110 active:scale-95' href='https://x.com/firstlook_app'>
                                        <XIcon sx={{ fontSize: 20 }} />
                                    </a>
                                    <a className='transform transition-transform duration-100 ease-in-out hover:scale-110 active:scale-95' href='https://youtube.com/@firstlook_app?si=pbbla-7I67I0b1eA'>
                                        <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22.5 0H7.5C3 0 0 3 0 7.5V16.5C0 21 3 24 7.5 24H22.5C27 24 30 21 30 16.5V7.5C30 3 27 0 22.5 0ZM17.835 13.545L14.13 15.765C12.63 16.665 11.4 15.975 11.4 14.22V9.765C11.4 8.01002 12.63 7.32001 14.13 8.22001L17.835 10.44C19.26 11.31 19.26 12.69 17.835 13.545Z" fill="#FE1940" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:hidden block mb-10">
                <div className="flex justify-center items-center flex-col space-y-6">
                    <div className="">
                        <svg width="139" height="26" viewBox="0 0 139 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.2189 8.44V12.664H12.1389C11.8349 11.496 11.4349 10.696 10.9389 10.264C10.4589 9.832 9.75491 9.616 8.82691 9.616H5.68291V16.288H8.32291C8.96291 16.288 9.44291 16.152 9.76291 15.88C10.0829 15.592 10.3629 15.048 10.6029 14.248H11.5389V20.08H10.6029C10.3629 19.04 10.0749 18.352 9.73891 18.016C9.40291 17.68 8.87491 17.512 8.15491 17.512H5.68291V22.768C5.68291 23.152 5.75491 23.424 5.89891 23.584C6.04291 23.728 6.33091 23.832 6.76291 23.896L7.60291 23.992V25H0.978906V23.992L1.67491 23.896C2.05891 23.832 2.30691 23.728 2.41891 23.584C2.53091 23.44 2.58691 23.168 2.58691 22.768V10.672C2.58691 10.272 2.53091 10 2.41891 9.856C2.30691 9.712 2.05891 9.608 1.67491 9.544L0.978906 9.448V8.44H13.2189ZM14.3617 25V23.992L15.0577 23.896C15.4417 23.832 15.6897 23.728 15.8017 23.584C15.9137 23.44 15.9697 23.168 15.9697 22.768V10.672C15.9697 10.272 15.9137 10 15.8017 9.856C15.6897 9.712 15.4417 9.608 15.0577 9.544L14.3617 9.448V8.44H20.6737V9.448L19.9777 9.544C19.6097 9.608 19.3617 9.72 19.2337 9.88C19.1217 10.024 19.0657 10.288 19.0657 10.672V22.768C19.0657 23.152 19.1217 23.424 19.2337 23.584C19.3617 23.728 19.6097 23.832 19.9777 23.896L20.6737 23.992V25H14.3617ZM31.5572 17.224L36.2612 24.52C35.6212 25.016 34.8692 25.264 34.0052 25.264C33.4932 25.264 33.0852 25.136 32.7812 24.88C32.4772 24.624 32.1572 24.16 31.8212 23.488C31.6452 23.152 30.6212 21.2 28.7492 17.632H26.5892V22.768C26.5892 23.152 26.6452 23.424 26.7572 23.584C26.8852 23.728 27.1332 23.832 27.5012 23.896L28.2212 23.992V25H21.8852V23.992L22.5812 23.896C22.9652 23.832 23.2132 23.728 23.3252 23.584C23.4372 23.44 23.4932 23.168 23.4932 22.768V10.672C23.4932 10.272 23.4372 10 23.3252 9.856C23.2132 9.712 22.9652 9.608 22.5812 9.544L21.8852 9.448V8.44H29.9972C33.5652 8.44 35.3492 9.808 35.3492 12.544C35.3492 13.664 35.0132 14.632 34.3412 15.448C33.6692 16.248 32.7412 16.84 31.5572 17.224ZM26.5892 9.616V16.48H28.6772C29.8612 16.48 30.7332 16.216 31.2932 15.688C31.8532 15.144 32.1332 14.264 32.1332 13.048C32.1332 11.848 31.8852 10.976 31.3892 10.432C30.8932 9.888 30.0932 9.616 28.9892 9.616H26.5892ZM37.7 24.328V19.984H38.66L38.9 20.8C39.22 21.872 39.788 22.712 40.604 23.32C41.436 23.912 42.364 24.208 43.388 24.208C45.244 24.208 46.172 23.392 46.172 21.76C46.172 21.12 45.996 20.576 45.644 20.128C45.324 19.696 44.932 19.336 44.468 19.048C44.02 18.76 43.3 18.392 42.308 17.944C41.38 17.528 40.588 17.128 39.932 16.744C38.492 15.864 37.772 14.624 37.772 13.024C37.772 11.408 38.324 10.176 39.428 9.328C40.548 8.464 41.892 8.032 43.46 8.032C45.124 8.032 46.58 8.28 47.828 8.776V12.688H46.868C46.324 10.32 45.02 9.136 42.956 9.136C42.188 9.136 41.556 9.344 41.06 9.76C40.564 10.176 40.316 10.72 40.316 11.392C40.316 11.92 40.476 12.392 40.796 12.808C41.1 13.176 41.468 13.488 41.9 13.744C42.332 14 43.004 14.336 43.916 14.752C44.988 15.232 45.844 15.672 46.484 16.072C48.068 17.016 48.86 18.392 48.86 20.2C48.86 21.816 48.34 23.088 47.3 24.016C46.26 24.928 44.86 25.384 43.1 25.384C41.036 25.384 39.236 25.032 37.7 24.328ZM62.8642 12.976H61.9042L61.7362 12.208C61.4962 11.136 61.2562 10.472 61.0162 10.216C60.7922 9.944 60.3202 9.808 59.6002 9.808H57.6802V22.768C57.6802 23.152 57.7522 23.424 57.8962 23.584C58.0402 23.728 58.3282 23.832 58.7602 23.896L59.6002 23.992V25H52.6642V23.992L53.5042 23.896C53.9362 23.832 54.2242 23.728 54.3682 23.584C54.5122 23.424 54.5842 23.152 54.5842 22.768V9.808H52.6882C51.9522 9.84 51.4802 9.968 51.2722 10.192C51.0802 10.4 50.8402 11.072 50.5522 12.208L50.3842 12.976H49.4002V8.44H62.8642V12.976Z" fill="#FE1940" />
                            <path d="M74.5372 20.296H75.1612V25H64.0972V24.4L65.0572 24.28C65.4892 24.216 65.7772 24.128 65.9212 24.016C66.0652 23.904 66.1372 23.712 66.1372 23.44V10C66.1372 9.728 66.0652 9.536 65.9212 9.424C65.7932 9.296 65.5052 9.208 65.0572 9.16L64.0972 9.04V8.44H69.5932V9.04L68.6332 9.16C68.2012 9.224 67.9132 9.312 67.7692 9.424C67.6252 9.536 67.5532 9.728 67.5532 10V24.328H71.1532C72.2412 24.328 73.0252 24.072 73.5052 23.56C73.9852 23.032 74.3292 21.944 74.5372 20.296ZM76.6698 17.176C76.6378 14.424 77.4298 12.2 79.0458 10.504C80.6778 8.808 82.7018 7.976 85.1178 8.008C87.5018 8.008 89.4058 8.776 90.8298 10.312C92.2698 11.832 92.9898 13.816 92.9898 16.264C93.0218 18.984 92.2218 21.192 90.5898 22.888C88.9578 24.584 86.9418 25.416 84.5418 25.384C82.1578 25.384 80.2458 24.624 78.8058 23.104C77.3818 21.584 76.6698 19.608 76.6698 17.176ZM91.4538 16.984C91.4538 14.328 90.8538 12.296 89.6538 10.888C88.4538 9.464 86.8058 8.752 84.7098 8.752C82.6938 8.752 81.1098 9.448 79.9578 10.84C78.8058 12.216 78.2298 14.056 78.2298 16.36C78.2298 19.032 78.8218 21.072 80.0058 22.48C81.2058 23.888 82.8618 24.592 84.9738 24.592C86.9898 24.592 88.5738 23.912 89.7258 22.552C90.8778 21.192 91.4538 19.336 91.4538 16.984ZM95.2089 17.176C95.1769 14.424 95.9689 12.2 97.5849 10.504C99.2169 8.808 101.241 7.976 103.657 8.008C106.041 8.008 107.945 8.776 109.369 10.312C110.809 11.832 111.529 13.816 111.529 16.264C111.561 18.984 110.761 21.192 109.129 22.888C107.497 24.584 105.481 25.416 103.081 25.384C100.697 25.384 98.7849 24.624 97.3449 23.104C95.9209 21.584 95.2089 19.608 95.2089 17.176ZM109.993 16.984C109.993 14.328 109.393 12.296 108.193 10.888C106.993 9.464 105.345 8.752 103.249 8.752C101.233 8.752 99.6489 9.448 98.4969 10.84C97.3449 12.216 96.7689 14.056 96.7689 16.36C96.7689 19.032 97.3609 21.072 98.5449 22.48C99.7449 23.888 101.401 24.592 103.513 24.592C105.529 24.592 107.113 23.912 108.265 22.552C109.417 21.192 109.993 19.336 109.993 16.984ZM123.734 11.488L120.542 15.352L126.95 24.856C126.662 25.096 126.358 25.216 126.038 25.216C125.766 25.216 125.534 25.136 125.342 24.976C125.15 24.816 124.918 24.536 124.646 24.136L119.63 16.456L116.678 20.032V23.44C116.678 23.712 116.75 23.912 116.894 24.04C117.038 24.152 117.342 24.232 117.806 24.28L118.838 24.4V25H113.222V24.4L114.182 24.28C114.614 24.216 114.902 24.128 115.046 24.016C115.19 23.904 115.262 23.712 115.262 23.44V10C115.262 9.728 115.19 9.536 115.046 9.424C114.918 9.296 114.63 9.208 114.182 9.16L113.222 9.04V8.44H118.718V9.04L117.758 9.16C117.326 9.224 117.038 9.312 116.894 9.424C116.75 9.536 116.678 9.728 116.678 10V18.976L122.798 11.488L123.35 10.816C123.894 10.192 124.166 9.768 124.166 9.544C124.166 9.336 123.926 9.208 123.446 9.16L122.174 9.04V8.44H127.382V9.04L126.614 9.16C126.214 9.224 125.798 9.432 125.366 9.784C124.934 10.12 124.39 10.688 123.734 11.488Z" fill="black" />
                            <path d="M132.13 1.856H131.866L131.826 1.632C131.757 1.264 131.69 1.04267 131.626 0.968C131.568 0.893333 131.392 0.845333 131.098 0.824H130.33V5.368C130.33 5.48 130.354 5.55733 130.402 5.6C130.456 5.64267 130.565 5.67467 130.73 5.696L131.066 5.736V6H128.858V5.736L129.194 5.696C129.354 5.67467 129.458 5.64267 129.506 5.6C129.56 5.55733 129.586 5.48 129.586 5.368V0.824H128.818C128.696 0.829333 128.618 0.832 128.586 0.832C128.554 0.832 128.504 0.842666 128.434 0.864C128.365 0.885333 128.325 0.906667 128.314 0.928C128.304 0.949333 128.28 0.997333 128.242 1.072C128.205 1.14133 128.178 1.21333 128.162 1.288C128.146 1.36267 128.122 1.47733 128.09 1.632L128.05 1.856H127.794V0.48H132.13V1.856ZM138.567 5.696L138.847 5.736V6H136.839V5.736L137.151 5.696C137.279 5.68533 137.367 5.664 137.415 5.632C137.463 5.59467 137.487 5.536 137.487 5.456L137.479 5.376L137.031 1.016L135.431 6.008H135.255L133.687 1.04L133.279 4.528C133.242 4.832 133.223 5.056 133.223 5.2C133.223 5.36 133.244 5.47733 133.287 5.552C133.335 5.62133 133.42 5.66667 133.543 5.688L133.847 5.736V6H132.159V5.736L132.431 5.696C132.596 5.664 132.706 5.58133 132.759 5.448C132.818 5.30933 132.879 5.00267 132.943 4.528L133.263 1.952C133.306 1.62133 133.327 1.384 133.327 1.24C133.327 1.096 133.306 0.989333 133.263 0.92C133.226 0.850667 133.156 0.805333 133.055 0.784L132.783 0.744V0.48H134.287L135.543 4.584L136.895 0.48H138.343V0.744L138.063 0.784C137.951 0.8 137.874 0.826666 137.831 0.864C137.788 0.896 137.767 0.949333 137.767 1.024L137.775 1.104L138.199 5.376C138.21 5.48267 138.239 5.55733 138.287 5.6C138.335 5.64267 138.428 5.67467 138.567 5.696Z" fill="black" />
                        </svg>
                    </div>
                    <div className="flex flex-row space-x-5">
                        <a className='transform transition-transform duration-100 ease-in-out hover:scale-110 active:scale-95' href='https://www.facebook.com/firstlookappofficial?mibextid=ZbWKwL'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 17.028C24 21.396 21.396 24 17.028 24H15.6C14.94 24 14.4 23.46 14.4 22.8V15.876C14.4 15.552 14.664 15.276 14.988 15.276L17.1 15.24C17.268 15.228 17.412 15.108 17.448 14.94L17.868 12.648C17.904 12.432 17.736 12.228 17.508 12.228L14.952 12.264C14.616 12.264 14.352 12 14.34 11.676L14.292 8.736C14.292 8.544 14.448 8.37601 14.652 8.37601L17.532 8.328C17.736 8.328 17.892 8.17201 17.892 7.96801L17.844 5.08799C17.844 4.88399 17.688 4.728 17.484 4.728L14.244 4.77601C12.252 4.81201 10.668 6.444 10.704 8.436L10.764 11.736C10.776 12.072 10.512 12.336 10.176 12.348L8.736 12.372C8.532 12.372 8.37601 12.528 8.37601 12.732L8.41201 15.012C8.41201 15.216 8.568 15.372 8.772 15.372L10.212 15.348C10.548 15.348 10.812 15.612 10.824 15.936L10.932 22.776C10.944 23.448 10.404 24 9.732 24H6.972C2.604 24 0 21.396 0 17.016V6.972C0 2.604 2.604 0 6.972 0H17.028C21.396 0 24 2.604 24 6.972V17.028Z" fill="#FE1940" />
                            </svg>
                        </a>
                        <a className='transform transition-transform duration-100 ease-in-out hover:scale-110 active:scale-95' href='https://www.instagram.com/firstlook_app?igsh=aXlsbmx3dm96bHo2'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.028 0H6.972C2.604 0 0 2.604 0 6.972V17.016C0 21.396 2.604 24 6.972 24H17.016C21.384 24 23.988 21.396 23.988 17.028V6.972C24 2.604 21.396 0 17.028 0ZM12 16.656C9.432 16.656 7.344 14.568 7.344 12C7.344 9.432 9.432 7.344 12 7.344C14.568 7.344 16.656 9.432 16.656 12C16.656 14.568 14.568 16.656 12 16.656ZM19.104 5.856C19.044 6 18.96 6.132 18.852 6.252C18.732 6.36 18.6 6.444 18.456 6.504C18.312 6.564 18.156 6.6 18 6.6C17.676 6.6 17.376 6.48 17.148 6.252C17.04 6.132 16.956 6 16.896 5.856C16.836 5.712 16.8 5.556 16.8 5.4C16.8 5.244 16.836 5.088 16.896 4.944C16.956 4.788 17.04 4.668 17.148 4.548C17.424 4.272 17.844 4.14 18.228 4.224C18.312 4.236 18.384 4.26 18.456 4.296C18.528 4.32 18.6 4.356 18.672 4.404C18.732 4.44 18.792 4.5 18.852 4.548C18.96 4.668 19.044 4.788 19.104 4.944C19.164 5.088 19.2 5.244 19.2 5.4C19.2 5.556 19.164 5.712 19.104 5.856Z" fill="#FE1940" />
                            </svg>
                        </a>
                        <a className='bg-[#FE1940] px-1 rounded-lg space-y-0 text-white transform transition-transform duration-100 ease-in-out' href='https://x.com/firstlook_app'>
                            <XIcon sx={{ fontSize: 15 }} />
                        </a>
                        <a className='transform transition-transform duration-100 ease-in-out hover:scale-110 active:scale-95' href='https://youtube.com/@firstlook_app?si=pbbla-7I67I0b1eA'>
                            <svg width="28" height="25" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.5 0H7.5C3 0 0 3 0 7.5V16.5C0 21 3 24 7.5 24H22.5C27 24 30 21 30 16.5V7.5C30 3 27 0 22.5 0ZM17.835 13.545L14.13 15.765C12.63 16.665 11.4 15.975 11.4 14.22V9.765C11.4 8.01002 12.63 7.32001 14.13 8.22001L17.835 10.44C19.26 11.31 19.26 12.69 17.835 13.545Z" fill="#FE1940" />
                            </svg>
                        </a>
                    </div>
                    <div className="w-full flex justify-center flex-col items-center">
                        <p className='text-[#444444] text-xs text-center font-antonia'>© 2024 by FIRSTLOOK</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer