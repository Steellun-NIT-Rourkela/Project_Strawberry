export default function Footer() {
    return (
        <footer className="flex flex-col md:flex-row items-center justify-center p-8 bg-gray-900">
            <div className="text-white flex flex-wrap items-center justify-center mt-4 md:mt-0">
                <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-violet-500">
                    &copy; {new Date().getFullYear()} Your Company
                </p>
                <div className="font-bold hidden md:block mx-2 text-red-500">|</div>
                <p className="font-bold md:hidden text-red-500">|</p>
                <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-violet-500">
                    All rights reserved.
                </p>
            </div>
        </footer>
    );
}
