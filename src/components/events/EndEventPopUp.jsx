import ButtonNav from '../layout/ButtonNav';

export default function EndEventPopUp({ ...props }) {
	return (
		<div
			className="fixed inset-x-2 top-1/3 h-fit flex-col gap-8 rounded-lg border-2 border-solid border-prime-dark bg-prime-white px-4 py-8 text-center"
			style={{ display: props.show ? 'flex' : 'none' }}
		>
			<h2 className="text-2xl font-bold">انتهت الفعالية</h2>
			<p className="text-center text-xl">
				نشكرك على استخدام حكموني، ونرجو ان ينال موقعنا اعجابك، انتظر المزيد من
				المزايا قريبا!
			</p>
			<ButtonNav link="/" color="bg-prime-green-200">
				العودة للصفحة الرئيسية
			</ButtonNav>
		</div>
	);
}
