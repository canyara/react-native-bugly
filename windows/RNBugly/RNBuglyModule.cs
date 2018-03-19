using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Bugly.RNBugly
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNBuglyModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNBuglyModule"/>.
        /// </summary>
        internal RNBuglyModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNBugly";
            }
        }
    }
}
