import * as React from "react";
import { useContext } from "react";
import { StickerScaleContext } from "@components/context/sticker-scale-context";
import Svg, { SvgProps, Path } from "react-native-svg";

// Viewbox
// width: 52
// height: 82
function Sticker111D331(props: SvgProps) {
  const stickerScale = useContext(StickerScaleContext);
  return (
    <Svg
      width={52 * stickerScale}
      height={82 * stickerScale}
      fill="none"
      {...props}
      viewBox="0 0 52 82"
    >
      <Path
        d="M51.86 50.214c-.553-3.712-2.8-6.82-6.499-8.987-1.798-1.054-3.915-1.604-6.15-1.591a7.22 7.22 0 003.482-4.223 2.692 2.692 0 00-1.417-3.216c1.236-.503 2.29-1.348 2.97-2.432.675-1.077.9-2.229 1.065-3.073a2.706 2.706 0 00-.839-2.507 2.739 2.739 0 00-2.594-.596c-.16.032-.688-.065-1.039-.13-.155-.028-.318-.06-.488-.087a7.183 7.183 0 002.541-1.423 7.178 7.178 0 002.438-5.845 2.702 2.702 0 00-1.306-2.136 2.735 2.735 0 00-2.506-.158c-.226.099-.467.16-.713.182-.174.015-.401.014-.645.014-.39 0-.86-.002-1.37.06a8.796 8.796 0 00.158-3.053c-.186-1.5-.76-2.995-1.665-4.326a8.274 8.274 0 00-1.678-1.84 9.172 9.172 0 00-.353-.265 2.727 2.727 0 00-4.235-.718 2.675 2.675 0 00-.878 1.873c-.026.59-.24 1.28-.466 2.013-.228.733-.484 1.565-.607 2.47-.202 1.51.02 2.88.677 4.185.54 1.075 1.308 2.037 2.376 2.977l.02.175c-1.582-.452-3.226-.463-4.807-.419a2.73 2.73 0 00-2.308 1.4 2.694 2.694 0 00.054 2.69c.552.914 1.234 2.039 2.152 3.076a6.708 6.708 0 00-1.874.561 2.718 2.718 0 00-1.5 1.902c-.17.831.067 1.704.634 2.335.273.304.533.694.802 1.118-.235-.07-.47-.136-.705-.201a2.745 2.745 0 00-2.624.664 2.696 2.696 0 00-.745 2.583c.408 1.644.966 3.894 2.452 5.731a8.758 8.758 0 002.134 1.887c-.093.204-.184.407-.27.61a11.293 11.293 0 00-2.14-1.981 10.286 10.286 0 00-4.388-1.76C14.109 36.99 8.768 39.48 6.014 43.81c-3.29 5.174-3.634 10.992-1.028 17.293 2.92 7.06 9.098 13.524 13.61 18.245l1.127 1.182a3.357 3.357 0 001.935.998c1.69.263 3.865-.436 11.082-4.994.247-.156.426-.27.518-.325 3.454-2.075 7.892-4.97 11.59-8.957 2.473-2.67 8.109-9.67 7.012-17.04z"
        fill="#CADBE3"
      />
      <Path
        d="M48.6 47.061c-.552-3.712-2.8-6.82-6.498-8.986-1.798-1.053-3.916-1.605-6.151-1.592a7.22 7.22 0 003.482-4.222 2.69 2.69 0 00-1.417-3.216c1.238-.502 2.292-1.348 2.97-2.432.675-1.077.901-2.228 1.064-3.072a2.701 2.701 0 00-.838-2.508c-.7-.634-1.7-.86-2.593-.595-.159.03-.689-.065-1.04-.13a21.79 21.79 0 00-.487-.087 7.204 7.204 0 002.542-1.423 7.174 7.174 0 002.437-5.845 2.701 2.701 0 00-1.307-2.136 2.735 2.735 0 00-2.505-.16 2.27 2.27 0 01-.714.183c-.173.015-.4.014-.645.014-.389-.001-.86-.002-1.37.059a8.75 8.75 0 00.159-3.052c-.186-1.5-.762-2.995-1.665-4.327a8.298 8.298 0 00-1.678-1.839 10.312 10.312 0 00-.287-.216l-.066-.049a2.731 2.731 0 00-4.236-.72 2.679 2.679 0 00-.878 1.873c-.025.59-.239 1.28-.466 2.013-.227.734-.483 1.566-.605 2.47-.203 1.511.018 2.88.675 4.186.541 1.074 1.307 2.037 2.376 2.976l.02.175c-1.582-.451-3.225-.462-4.807-.419a2.73 2.73 0 00-2.308 1.4 2.691 2.691 0 00.055 2.69c.552.913 1.233 2.038 2.152 3.076a6.671 6.671 0 00-1.874.562 2.713 2.713 0 00-1.501 1.902 2.7 2.7 0 00.634 2.334c.273.304.533.693.802 1.119-.235-.07-.47-.137-.703-.202a2.744 2.744 0 00-2.625.665 2.694 2.694 0 00-.746 2.583c.408 1.643.967 3.894 2.453 5.73a8.775 8.775 0 002.133 1.887c-.093.204-.183.407-.27.61a11.26 11.26 0 00-2.14-1.98 10.285 10.285 0 00-4.388-1.76c-4.895-.763-10.238 1.728-12.991 6.059C-.534 45.832-.88 51.65 1.727 57.952c2.92 7.059 9.098 13.524 13.609 18.245.388.404.764.798 1.128 1.182.508.534 1.177.88 1.935.998 1.689.263 3.865-.436 11.08-4.994.248-.156.428-.27.52-.326 3.453-2.075 7.892-4.969 11.59-8.956 2.473-2.67 8.11-9.67 7.012-17.04z"
        fill="#fff"
      />
      <Path
        d="M23.654 49.933c-1.272-3.805-.124-8 1.613-11.619 1.738-3.617 4.066-6.974 5.343-10.777 1.779-5.296 1.387-11.06.556-16.581"
        stroke="#243645"
        strokeWidth={0.45}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.997 75.72c-.247 0-.436-.066-.56-.196l-1.134-1.19C12.941 69.77 6.966 63.517 4.238 56.925c-2.252-5.445-1.98-10.432.813-14.825 1.875-2.952 5.465-4.935 8.933-4.935 1.7 0 3.28.482 4.572 1.395 2.874 2.029 4.012 5.68 4.997 8.937 2.012-3.248 4.36-5.588 6.988-6.957a11.859 11.859 0 015.451-1.36c1.729 0 3.363.423 4.727 1.221 3.01 1.763 4.756 4.137 5.19 7.056.951 6.391-4.6 12.953-6.323 14.813-3.466 3.736-7.699 6.492-10.998 8.476-.105.063-.307.19-.582.363-3.133 1.98-7.476 4.612-9.009 4.612z"
        fill="#F27C88"
      />
      <Path
        d="M13.986 37.39c1.576 0 3.119.419 4.441 1.353 2.95 2.083 4.014 5.862 5.058 9.305 1.765-2.965 4.093-5.709 7.163-7.31 1.633-.852 3.504-1.334 5.346-1.334 1.618 0 3.214.372 4.612 1.19 9.187 5.381 4.483 15.412-1.185 21.523-3.164 3.412-6.97 6.046-10.948 8.436-.831.498-7.589 4.943-9.474 4.943-.178 0-.313-.04-.395-.126-4.556-4.8-11.206-11.406-14.155-18.53-1.972-4.77-2.288-9.773.795-14.62 1.852-2.913 5.373-4.83 8.742-4.83zm0-.45c-3.542 0-7.209 2.025-9.126 5.04-2.833 4.457-3.112 9.514-.83 15.03 2.744 6.633 8.736 12.902 13.112 17.48.39.407.768.804 1.133 1.19.168.176.412.266.724.266 1.575 0 5.707-2.482 9.132-4.646.273-.173.473-.299.576-.362 3.313-1.99 7.563-4.757 11.049-8.516 1.741-1.877 7.347-8.506 6.38-14.997-.444-2.99-2.228-5.418-5.299-7.217-1.4-.82-3.074-1.252-4.843-1.252-1.898 0-3.819.48-5.557 1.385-2.548 1.329-4.836 3.552-6.81 6.617-.965-3.167-2.141-6.608-4.938-8.582-1.331-.94-2.957-1.436-4.703-1.436z"
        fill="#243645"
      />
      <Path
        d="M44.956 45.081c-.533 3.27-1.745 6.43-3.433 9.282a31.473 31.473 0 01-7.37 8.538c-2.62 2.101-5.595 3.574-8.837 4.468-4.328 1.195-9.382 1.597-13.817.289 2.433 2.872 4.992 5.486 7.104 7.71.95 1 8.96-4.27 9.868-4.816 3.979-2.39 7.786-5.025 10.949-8.436 4.329-4.665 8.086-11.613 5.536-17.035z"
        fill="#EBCBD1"
      />
      <Path
        opacity={0.3}
        d="M4.592 52.79c.22-2.8.875-5.544 2.309-7.983 1.295-2.204 3.092-4.312 5.507-5.337 2.537-1.076 5.513-.445 7.57 1.338.671.584 1.2 1.267 1.656 1.999-.76-1.605-1.756-3.04-3.207-4.065-4.15-2.93-10.466-.798-13.183 3.476-3.083 4.848-2.767 9.85-.795 14.62.07.17.153.338.229.507a22.633 22.633 0 01-.086-4.556zM40.4 40.486c-2.96-1.621-6.751-1.312-9.752.253-2.69 1.402-4.809 3.682-6.48 6.217 3.916-4.564 10.233-7.207 16.233-6.47z"
        fill="#BBBDBF"
      />
      <Path
        d="M28.502 7.422c.207-1.553 1.02-3.053 1.092-4.722-.018.393.783.887 1.041 1.094.449.36.807.766 1.134 1.249.638.94 1.08 2.017 1.22 3.146.21 1.685-.295 3.478-1.478 4.705-1.043-.775-2.015-1.694-2.598-2.85-.46-.915-.525-1.776-.411-2.622zM27.385 20.593c-1.419-.953-2.354-2.452-3.237-3.91 1.828-.05 3.77-.045 5.334.897a4.925 4.925 0 011.574 1.53c.311.479.892 1.466.726 2.065-.19.691-1.435.445-1.959.363a6.033 6.033 0 01-2.438-.945zM22.527 34.151c-1.072-1.326-1.52-3.032-1.931-4.685 1.763.489 3.615 1.062 4.83 2.42.493.551.85 1.217 1.049 1.925.154.547.415 1.661.08 2.184-.389.605-1.503.005-1.98-.227a6.004 6.004 0 01-2.048-1.617zM35.912 22.792c1.167.078 2.349.566 3.47.236-.146.746-.299 1.512-.703 2.158-.657 1.049-1.92 1.63-3.165 1.67-1.242.041-2.46-.399-3.532-1.029-1.075-.631-.45-1.162.178-1.713 1.016-.892 2.522-1.404 3.752-1.322zM25.46 27.339c-.782-1.03-1.338-2.224-2.202-3.188.934-.439 2.03-.474 3.027-.206.997.27 1.9.825 2.671 1.507.79.699 1.527 2.097 1.362 3.17a.3.3 0 01-.06.156c-.04.049-.105.068-.167.085-.958.268-1.85.54-2.787.09-.737-.355-1.353-.97-1.844-1.614zM29.94 40.013c1.091-.699 2.028-1.632 3.172-2.24-.725-.731-1.743-1.14-2.772-1.229-1.029-.088-2.07.126-3.03.503-.984.385-2.16 1.447-2.375 2.51a.298.298 0 000 .168c.022.059.077.1.128.137.808.578 1.55 1.14 2.586 1.036.817-.08 1.609-.448 2.292-.885zM33.248 30.654c.676.139 1.299.46 1.963.646a5.026 5.026 0 001.62.176 4.54 4.54 0 01-2.71 2.877 4.589 4.589 0 01-3.95-.384c-.65-.4-1.217-.894-1.902-1.232.92-1.548 3.252-2.434 4.979-2.083zM35.711 13.613c.682-.108 1.379-.024 2.067-.083a4.986 4.986 0 001.58-.403 4.514 4.514 0 01-1.518 3.641 4.578 4.578 0 01-3.833 1.022c-.75-.147-1.456-.41-2.218-.488.313-1.768 2.181-3.414 3.922-3.69z"
        fill="#67C7C6"
        stroke="#243645"
        strokeWidth={0.45}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.454 45.291a5.65 5.65 0 00.188-.222c.064-.079.132-.15.204-.216.07-.065.147-.118.224-.158a.44.44 0 01.261-.041c.236.14.475.274.715.405.198.103.402.212.61.325.206.113.399.222.576.329.26.156.456.298.587.432.226.272.323.444.279.524l-.014.026c-.094.098-.232.117-.415.053a3.42 3.42 0 01-.597-.284 7.336 7.336 0 01-.244-.151 8.05 8.05 0 00-.233-.149 4.422 4.422 0 00-.44-.243c-.131-.06-.231-.07-.302-.03a.693.693 0 00-.104.136l-.21.314-.339.506a7.68 7.68 0 00-.324.527c-.074.124-.137.23-.189.323a.876.876 0 00-.09.2c.004-.006.075.03.217.105a8.464 8.464 0 01.803.492c.107.076.2.149.275.22a.723.723 0 01.166.214.209.209 0 01-.001.203l-.024.042a.32.32 0 01-.204.116.663.663 0 01-.258-.02 1.367 1.367 0 01-.287-.111 4.767 4.767 0 01-.293-.166 25.199 25.199 0 01-.274-.17c-.068-.042-.13-.08-.184-.115a.769.769 0 00-.162-.081c-.16-.063-.272-.055-.337.027-.243.364-.488.725-.735 1.08-.247.354-.492.714-.736 1.078l-.243.364c-.078.117-.155.24-.231.37-.05.077-.1.136-.145.181a1.94 1.94 0 00-.163.181c-.048.072-.095.11-.145.117a1.15 1.15 0 01-.204.005 1.186 1.186 0 01-.28-.096 2.33 2.33 0 01-.623-.436.48.48 0 01-.15-.242c-.018-.085 0-.194.058-.323a3.09 3.09 0 01.241-.438c.105-.163.229-.342.37-.54.141-.196.29-.404.443-.624.257-.372.532-.76.825-1.161.292-.403.572-.786.842-1.149.268-.363.511-.688.73-.977.216-.287.375-.5.478-.635.03-.038.06-.077.088-.117zM13.398 53.89c-.202-.043-.333-.115-.393-.216a.46.46 0 01-.058-.328c.022-.118.067-.236.135-.355.069-.12.126-.223.172-.31l.155-.28a91.392 91.392 0 00.624-1.124c.112-.203.208-.372.289-.507.14-.245.3-.504.48-.78.18-.274.376-.547.585-.817.211-.272.44-.527.688-.77.247-.242.509-.449.783-.62a2.983 2.983 0 01.931-.383c.165-.038.328-.056.487-.055.16 0 .306.028.44.083a.84.84 0 01.449.378c.104.18.172.393.207.639.036.246.044.518.022.815a8.482 8.482 0 01-.386 1.958c-.123.39-.254.788-.395 1.196a22.57 22.57 0 01-.313.847c-.115.292-.228.588-.336.89-.108.302-.217.6-.324.896-.106.294-.203.576-.285.845-.02.11-.04.178-.064.202-.022.023-.098.05-.226.083-.174.05-.367.025-.58-.077a2.34 2.34 0 01-.518-.327c-.089-.076-.132-.203-.13-.381.004-.178.033-.383.088-.615a6.13 6.13 0 01.228-.732c.097-.258.193-.508.293-.75.1-.242.19-.465.273-.668.082-.203.147-.358.19-.467a66.26 66.26 0 01-.953-.35c-.32-.12-.622-.247-.907-.377-.048.079-.11.196-.186.352-.076.155-.162.327-.258.514l-.292.566c-.1.192-.192.366-.276.52-.062.103-.11.19-.15.261a.923.923 0 01-.123.174.283.283 0 01-.147.087.546.546 0 01-.22-.017zm3.775-2.335c.069-.106.164-.295.283-.568a11.186 11.186 0 00.536-1.554 5.03 5.03 0 00.13-.615 1.69 1.69 0 00.009-.48c-.02-.132-.073-.217-.157-.253-.094-.033-.21-.012-.348.063-.14.076-.287.187-.447.333a6.07 6.07 0 00-.498.521c-.173.202-.34.412-.502.632-.16.221-.313.44-.457.657a5.33 5.33 0 00-.352.598l.268.116c.164.07.347.144.552.22.202.076.399.146.59.212.19.064.32.103.393.118zM22.91 52.406c.377-.4.72-.812 1.032-1.231.311-.42.632-.847.96-1.286a.402.402 0 00.073-.163c.016-.067.04-.131.068-.193a.404.404 0 01.135-.161.443.443 0 01.266-.066c.172 0 .31.055.415.167.106.112.19.255.252.431.072.216.124.507.156.874.032.366.052.775.057 1.227.004.453.002.927-.01 1.424-.01.497-.023.98-.039 1.451-.013.432-.022.834-.03 1.207-.007.373-.006.69.004.953.005.059.008.126.008.2a.604.604 0 01-.041.214.517.517 0 01-.12.18.434.434 0 01-.232.105 1.21 1.21 0 01-.247.007 2.158 2.158 0 01-.338-.045 2.3 2.3 0 01-.326-.09.595.595 0 01-.225-.132 1.191 1.191 0 01-.334-.561 2.053 2.053 0 01-.058-.624c.014-.212.042-.424.08-.637.04-.212.071-.412.096-.6a103.323 103.323 0 00.235-2.085c.034-.332.06-.642.077-.934.017-.29.025-.542.023-.752a6.56 6.56 0 01-.268.4c-.103.144-.204.282-.305.417-.101.134-.193.257-.276.37a3.37 3.37 0 00-.175.25 1.3 1.3 0 01-.118.18c-.045.059-.084.12-.12.184a.607.607 0 00-.052.473c.027.13.016.226-.035.291a.377.377 0 01-.226.128.764.764 0 01-.328-.012 1.49 1.49 0 01-.337-.124 1.546 1.546 0 01-.42-.348 3.865 3.865 0 01-.363-.505c-.17-.292-.316-.6-.435-.922a15.76 15.76 0 00-.322-.816c-.029.107-.065.25-.108.427l-.146.585c-.054.212-.111.436-.174.668l-.186.692a9.965 9.965 0 00-.102.425c-.038.176-.078.364-.119.566-.04.202-.084.409-.132.619-.046.21-.098.403-.153.578l-.07.266a.422.422 0 01-.097.182.259.259 0 01-.188.072.963.963 0 01-.335-.077c-.095-.033-.152-.131-.175-.293a2.59 2.59 0 01-.002-.583c.012-.194.034-.398.068-.614a10.7 10.7 0 01.112-.611c.039-.193.076-.364.11-.515.032-.15.055-.258.065-.323.104-.563.224-1.172.36-1.828.137-.656.292-1.274.463-1.858l.174-.543c.008-.14.043-.243.107-.305a.396.396 0 01.252-.106.924.924 0 01.42.058c.153.054.258.122.315.205.052.075.113.202.19.38.076.179.157.382.245.608.087.227.178.469.273.725.094.256.187.5.275.733.089.232.17.44.24.626.072.185.129.316.161.395zM28.61 53.714c.003.334.007.683.015 1.048a27.973 27.973 0 00.116 2.053c.03.303.073.556.132.757a.687.687 0 01.03.166c0 .13-.04.23-.127.296a.628.628 0 01-.32.12 1.634 1.634 0 01-.844-.126c-.207-.09-.339-.218-.396-.384-.033-.086-.054-.263-.062-.531a28.304 28.304 0 01-.01-.927c0-.35.006-.72.017-1.112.011-.393.023-.758.037-1.097.012-.308.024-.575.037-.803.013-.228.021-.389.024-.48.028-.73.069-1.478.119-2.241l.01-.284c.006-.131.03-.25.07-.356.042-.106.14-.156.298-.153.123.003.269.042.44.115.116.046.2.12.253.221.052.101.097.23.133.387.022.117.035.307.037.567.003.249 0 .53-.008.848-.01.318-.012.616-.01.897l.009 1.02zM33.3 56.046c.24.002.442.036.606.1.164.064.255.14.272.231.014.077-.033.154-.144.23-.11.074-.294.134-.552.175-.179.027-.374.053-.589.076-.215.023-.424.046-.629.07-.259.03-.494.065-.705.105-.08.014-.18.038-.299.07a1.88 1.88 0 01-.379.066c-.018 0-.036.003-.054.004a1.314 1.314 0 01-.428-.044 1.3 1.3 0 01-.461-.245.655.655 0 01-.248-.367 2.068 2.068 0 01-.064-.443l-.066-1.704c-.01-.03-.02-.058-.028-.087a6.774 6.774 0 00-.024-.334 15.238 15.238 0 01-.038-.503c-.012-.192-.023-.4-.035-.622a45.333 45.333 0 01-.048-1.288c-.003-.2-.005-.393-.005-.584l.01-.57c.006-.208.041-.343.105-.406a.39.39 0 01.273-.11.534.534 0 01.272.071c.098.052.192.129.285.227a1.551 1.551 0 01.395.852 208.601 208.601 0 00.478 4.066c.047.373.087.638.118.795.032.159.06.259.08.303.046.009.101.014.167.014.065 0 .138-.004.216-.012.07-.001.14-.005.21-.013l.223-.025.495-.063c.095-.006.193-.015.295-.026.097-.011.196-.014.295-.01zM35.427 52.051c.021-.208.044-.449.068-.725a22.3 22.3 0 01.089-.845l.103-.853c.033-.281.072-.53.119-.749.067-.218.19-.354.373-.412a.485.485 0 01.428.077c.07.053.135.106.191.163a.567.567 0 01.133.214c.012.037.02.074.02.112l.005.128c-.008.293-.028.615-.064.967-.035.352-.068.7-.1 1.045-.02.204-.034.379-.043.525-.01.146-.034.307-.073.483-.04.154-.044.335-.013.544.03.209.081.433.15.67.06.208.13.42.21.639.08.218.163.429.246.633l.233.586c.074.187.131.348.171.486l.017.056c.046.186.053.355.022.51-.033.155-.16.265-.387.327a1.733 1.733 0 01-.209.036c-.233.028-.423.02-.569-.025a.791.791 0 01-.35-.207c-.025-.027-.065-.117-.115-.27a22.159 22.159 0 01-.175-.553c-.067-.216-.131-.45-.196-.703-.064-.254-.128-.498-.188-.731-.06-.235-.114-.444-.163-.627l-.1-.39-.218-.155a.906.906 0 01-.202-.2 43.805 43.805 0 01-.771-1.25 50.302 50.302 0 01-.547-.945c-.076-.135-.135-.245-.181-.33a1.347 1.347 0 00-.136-.218.368.368 0 01-.078-.16c-.014-.07.015-.153.084-.245a.567.567 0 01.218-.103.44.44 0 01.261.027c.084.037.16.087.23.152.069.065.133.138.191.22.059.08.111.156.158.226.068.105.14.215.211.329a10.535 10.535 0 01.357.606c.048.083.085.14.108.176.051.082.103.167.152.255.05.09.097.171.141.248.044.077.081.138.112.184.035.046.06.07.077.072zM17.986 59.288c.01-.042.02-.087.028-.134a.941.941 0 01.035-.135.438.438 0 01.057-.115.188.188 0 01.094-.074l.364.02a5.618 5.618 0 01.606.052c.135.02.24.05.316.087.138.08.204.143.197.185l-.002.014c-.024.059-.08.09-.165.091a1.696 1.696 0 01-.414-.043l-.119-.021a1.43 1.43 0 00-.218-.02c-.064-.001-.105.015-.125.046a.28.28 0 00-.017.08 6.335 6.335 0 00-.029.175l-.044.284c-.017.104-.03.2-.036.289a9.184 9.184 0 00-.02.175.52.52 0 00-.001.103 2.075 2.075 0 01.468.056c.05.012.096.027.134.044a.268.268 0 01.091.063.101.101 0 01.026.088l-.003.023a.166.166 0 01-.061.087.262.262 0 01-.1.039.48.48 0 01-.12.004 1.913 1.913 0 01-.13-.016l-.124-.02c-.03-.004-.058-.01-.083-.014a.24.24 0 00-.07 0c-.067.005-.105.032-.116.08a27.88 27.88 0 01-.102.607c-.034.2-.067.404-.1.607-.012.07-.022.138-.032.204-.011.065-.02.133-.027.204a.927.927 0 01-.023.106.804.804 0 00-.03.11c-.007.04-.017.067-.03.08a.44.44 0 01-.064.046.302.302 0 01-.101.022.582.582 0 01-.25-.04.147.147 0 01-.08-.063.308.308 0 01-.027-.146c0-.065.004-.144.014-.234.01-.09.023-.192.04-.305l.049-.358a44.934 44.934 0 01.19-1.33 78.708 78.708 0 01.146-.937l.008-.066zM20.079 61.127l-.076.49c-.024.17-.048.338-.067.502-.02.164-.035.317-.049.46-.014.144-.019.264-.015.36v.043a.243.243 0 01-.003.037c-.01.061-.03.104-.065.13a.177.177 0 01-.116.038.433.433 0 01-.273-.1.28.28 0 01-.11-.194 1.227 1.227 0 01.012-.251 24.278 24.278 0 01.125-.955c.027-.184.054-.355.079-.513.022-.143.043-.268.062-.374l.037-.225c.054-.34.113-.69.18-1.045l.021-.132a.51.51 0 01.052-.163c.024-.048.071-.066.142-.055a.507.507 0 01.189.081c.048.03.08.07.096.12a.74.74 0 01.028.19c.001.056-.01.146-.028.267-.018.116-.042.247-.069.394-.027.147-.052.286-.072.418l-.08.477zM21.109 61.35c-.007.004-.015.03-.023.075-.008.046-.018.102-.026.17-.01.066-.02.14-.028.218-.01.078-.018.152-.025.223l-.023.188-.014.105a6.692 6.692 0 00-.065.445c-.02.168-.042.332-.063.491a1.78 1.78 0 00-.02.18.92.92 0 01-.03.186.413.413 0 01-.08.149c-.033.042-.086.064-.155.069-.092.004-.16-.017-.203-.062a.37.37 0 01-.088-.173.872.872 0 01-.02-.22c.002-.079.007-.145.012-.2.012-.127.026-.271.046-.434l.06-.497c.021-.168.043-.335.067-.5l.063-.445.047-.325c.014-.085.02-.136.024-.151.019-.142.038-.279.058-.413.02-.134.037-.259.056-.375.016-.116.03-.221.047-.316l.037-.237a3.147 3.147 0 01.021-.119.248.248 0 01.016-.035.465.465 0 01.039-.05.299.299 0 01-.042-.151c.003-.04.019-.07.045-.091a.199.199 0 01.114-.036c.05-.003.106-.002.171.005.127.013.26.043.397.089.137.047.261.11.373.19.111.08.204.175.276.288a.68.68 0 01.108.39 1.125 1.125 0 01-.09.454 1.132 1.132 0 01-.526.55 1.26 1.26 0 01-.32.115c.095.317.193.634.296.948.104.314.203.63.302.949.01.055.023.117.04.187.018.07.03.14.038.207a.794.794 0 01.001.19c-.008.058-.03.1-.07.125-.045.03-.088.04-.126.032a.21.21 0 01-.106-.061.45.45 0 01-.08-.11 1.682 1.682 0 01-.052-.115 3.424 3.424 0 01-.138-.501l-.12-.605a33.257 33.257 0 00-.111-.572 2.384 2.384 0 00-.113-.407l.003-.018zm.06-.53a.353.353 0 00.225-.047.696.696 0 00.188-.168c.055-.07.1-.152.138-.243.035-.09.061-.183.072-.274a.882.882 0 00.002-.262.4.4 0 00-.085-.206.843.843 0 00-.19-.15.844.844 0 00-.255-.106l.03.061a.162.162 0 01.01.076c-.002.003-.005.034-.01.092-.007.06-.015.132-.023.22-.01.088-.02.185-.029.29l-.031.305c-.011.097-.02.183-.026.258-.006.076-.014.126-.015.154zM23.126 64.17a.253.253 0 01-.057-.005.193.193 0 01-.119-.056.122.122 0 01-.029-.107l.001-.01a.106.106 0 01.04-.06.2.2 0 01.073-.027c.03-.006.064-.011.102-.015a.985.985 0 00.116-.02.293.293 0 00.075-.034.468.468 0 00.148-.144.293.293 0 00.04-.09l.019-.07.014-.07a.99.99 0 000-.344 3.825 3.825 0 00-.066-.29l-.013-.038a1.627 1.627 0 00-.113-.302 6.373 6.373 0 00-.152-.279c-.055-.092-.11-.188-.167-.286a4.841 4.841 0 01-.171-.325 1.605 1.605 0 01-.105-.286 2.147 2.147 0 01-.06-.32 2.886 2.886 0 01-.019-.337c.001-.115.01-.225.026-.332l.017-.1a1.254 1.254 0 01.142-.381.804.804 0 01.178-.216.643.643 0 01.54-.137c.073.012.154.034.24.065a.684.684 0 01.282.178c.056.068.08.124.073.169-.01.06-.056.085-.14.072a.456.456 0 01-.18-.08.453.453 0 00-.191-.081.268.268 0 00-.271.115c-.07.094-.124.212-.162.356a.487.487 0 00-.013.05l-.009.054a1.22 1.22 0 00-.016.25c.002.085.008.168.02.25.01.082.025.157.044.227.02.07.04.13.063.181.059.131.121.257.19.378l.204.36c.068.118.13.237.188.356.056.12.103.242.14.367.051.173.061.362.028.565-.021.131-.06.256-.115.372a.977.977 0 01-.196.273.675.675 0 01-.288.166c-.053.02-.11.035-.173.048a.912.912 0 01-.19.017l.012-.028zM25.744 60.193c0 .028 0 .044.004.05.004.006.005.023.004.055a97.96 97.96 0 01-.186 1.62c-.035.266-.065.542-.088.827-.023.285-.057.564-.1.84-.022.14-.048.275-.078.404a.182.182 0 01-.085.12.21.21 0 01-.141.022.309.309 0 01-.177-.1c-.055-.057-.077-.133-.068-.228.014-.147.026-.295.036-.444l.038-.458.045-.497a23.032 23.032 0 01.113-.992c.02-.14.04-.278.061-.412.026-.165.053-.32.081-.466.027-.146.06-.28.095-.407-.012-.001-.023-.004-.035-.007a.543.543 0 00-.122-.02c-.027-.002-.054-.005-.077-.01a.485.485 0 01-.15-.041.393.393 0 01-.157-.107c-.034-.041-.049-.078-.043-.112.008-.052.055-.08.14-.081.135.002.264.009.386.02.122.012.252.02.39.03l.158.013c.064.006.133.014.203.025.077.012.15.027.22.046a.337.337 0 01.148.072c.052.045.075.094.065.146-.01.064-.06.106-.15.126a.492.492 0 01-.148.013 1.63 1.63 0 01-.153-.017l-.115-.018-.057-.009c-.023-.002-.042-.004-.057-.003z"
        fill="#fff"
      />
    </Svg>
  );
}

export default Sticker111D331;