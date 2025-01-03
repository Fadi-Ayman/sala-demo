import GridContainerWithTitle from "../components/GridContainerWithTitle";
// icons
import { GoGear } from "react-icons/go";
import { CiDeliveryTruck } from "react-icons/ci";
import { BiWallet } from "react-icons/bi";
import { BsToggles } from "react-icons/bs";
import { BsTranslate } from "react-icons/bs";
import { TbCoin } from "react-icons/tb";
import { FaAward } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { FiCompass } from "react-icons/fi";
import { MdLocalActivity } from "react-icons/md";
import { HiOutlineShieldExclamation } from "react-icons/hi2";
import { GoBell } from "react-icons/go";
import { RiFilePaper2Line } from "react-icons/ri";
import { MdPlaylistAdd } from "react-icons/md";

const ShopSettings = {
  sectionName: "إعدادات المتجر",
  settingsArray: [
    {
      icon: <GoGear size={35} />,
      title: "الإعدادات الاساسية",
      description: "رصيد المحفظة ,فواتير, اشتركاتي",
    },
    {
      icon: <CiDeliveryTruck size={35} />,
      title: "خيارات الشحن و التوصيل",
      description: "الربط مع شركات الشحن",
    },
    {
      icon: <BiWallet size={35} />,
      title: "طرق الدفع",
      description: "تفعيل المدفوعات الالكترونية",
    },
    {
      icon: <BiWallet size={35} />,
      title: "المحفظة و الفواتير",
      description: "رصيد المحفظة ,فواتير, اشتركاتي",
    },
    {
      icon: <BsToggles size={35} />,
      title: "خيارات المتجر",
      description: "خيارات التحكم بالمتجر",
    },
    {
      icon: <BsTranslate size={35} />,
      title: "اللغات",
      description: "تفعيل تعدد اللغات بالمتجر",
    },
    {
      icon: <TbCoin size={35} />,
      title: "العملات",
      description: "العملات المتاحة بالمتجر",
    },
    {
      icon: <FaAward size={35} />,
      title: "اعدادات التقييم",
      description: "تحديد اعدادات التقييم الخاصة بمتجرك",
    },
    {
      icon: <BsCart2 size={35} />,
      title: "خيارات الطلب",
      description: "اضافة حقول مُخصصة في سلة المشتريات",
    },
    {
      icon: <TfiWorld size={35} />,
      title: "إعدادات الدومين",
      description: "التحكم في اعدادات الدومين الخاص بمتجرك",
    },
    {
      icon: <IoIosRemoveCircleOutline size={35} />,
      title: "وضع الصيانة",
      description: "اغلاق المتجر بشكل مؤقت ",
    },
    {
      icon: <FiCompass size={35} />,
      title: "قيود شركات الشحن",
      description: "اضافة قيود مخصصة للمنتجات و الطلبات",
    },

    {
      icon: <HiOutlineShieldExclamation size={35} />,
      title: "قيود الدفع",
      description: "إضافة قيود الدفع",
    },
    {
      icon: <GoBell size={35} />,
      title: "الإشعارات",
      description: "إعدادات الإشعارات الخاصة بك",
    },
    {
      icon: <RiFilePaper2Line size={35} />,
      title: "أعدادات فواتير المتجر",
      description: "التحكم بالفواتير الصادرة مع الطلبات",
    },
    {
      icon: <MdPlaylistAdd size={35} />,
      title: "الحقول المخصصة",
      description: "إضافة حقول مخصصة للمنتجات و الطلبات",
    },

    {
      icon: <MdLocalActivity size={35} />,
      title: "تطبيق محلي",
      description: "إعدادات ربط المتجر مع المحلي",
    },
  ],
};

function AccountSettings() {
  return (
    <div className="p-6 ">
      <GridContainerWithTitle
        title={ShopSettings.sectionName}
        cards={ShopSettings.settingsArray}
      />
      <GridContainerWithTitle
        title={ShopSettings.sectionName}
        cards={ShopSettings.settingsArray}
      />
      <GridContainerWithTitle
        title={ShopSettings.sectionName}
        cards={ShopSettings.settingsArray}
      />
    </div>
  );
}

export default AccountSettings;
